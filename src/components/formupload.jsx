"use-client";
import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!file) {
            setMessage('Please select a file first');
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json();
            const { url } = data;

            // Now submit the form data along with the uploaded file URL
            const formResponse = await fetch('/api/upload-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    bio,
                    imageUrl: url,
                }),
            });

            if (!formResponse.ok) {
                throw new Error(`Form submission error: ${formResponse.statusText}`);
            }

            setMessage('Form submitted successfully!');
        } catch (error) {
            console.error('Upload error:', error);
            setMessage(`Failed to upload file: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="upload"
            className="flex justify-center items-center flex-col font-Oswald text-xl"
        >
            <form onSubmit={handleUpload}>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <div className="w-full flex flex-col gap-5">
                        <label htmlFor="firstName" className="font-semibold text-primary text-opacity-90">
                             Name
                        </label>
                        <input
                            id="firstName"
                            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                </div>

                <div className="w-full flex flex-col gap-5 mt-5">
                    <label htmlFor="bio" className="font-semibold text-primary text-opacity-90">
                        A short description about yourself!
                    </label>
                    <textarea
                        id="bio"
                        className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
                        placeholder="Enter your bio"
                        rows="4"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full flex flex-col gap-5 mt-5">
                    <label htmlFor="file" className="font-semibold text-primary text-opacity-90">
                        Upload an Image of yourself here:
                    </label>
                    <input
                        id="file"
                        className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                <div className="flex justify-between mt-5">
                    <div></div>
                    <button
                        type="submit"
                        className={`p-3 shadow-xl font-semibold text-lavender bg-primary mt-5 rounded-xl transition duration-300 text-md flex justify-center items-center gap-3 ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:scale-105'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>

                <div className="mt-5">
                    <p className="text-primary">{message}</p>
                </div>
            </form>
        </section>
    );
};

export default FileUpload;