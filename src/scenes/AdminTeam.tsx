"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";

interface TeamMember {
  bio: string;
  key: string;
  photo: string;
  fullName: string;
}

const AdminTeam: React.FC = () => {
  const [open, setOpen] = useState<string | boolean>(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<'submissions' | 'list'>('submissions');
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const fetchTeamMembers = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get<TeamMember[]>(url);
      if (Array.isArray(response.data)) {
        setTeamMembers(response.data);
      } else {
        setTeamMembers([]);
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      setError("Failed to fetch team members.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const url = view === 'submissions'
        ? "https://hook.eu2.make.com/lb07eugavgpp2ii2jn6dxt0pnfgm4sgj"
        : "https://hook.eu2.make.com/9nfv7njs3urcf312gc70hnsaknza5tri";
      fetchTeamMembers(url);
    }
  }, [view, isAuthenticated]);

  const openModal = (fullName: string) => {
    setOpen(fullName);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleDelete = async (key: string) => {
    setIsSubmitting(true);
    const endpoint = view === 'submissions'
      ? "https://hook.eu2.make.com/xhcg6lw6vjapm611suzsk5cfnupe3ane"
      : "https://hook.eu2.make.com/w8s97j5tmhshle31uk47ph0lvmnooava";
    
    try {
      await axios.post(endpoint, { key });
      setTeamMembers((prev) => prev.filter((member) => member.key !== key));
      setModalMessage("Successfully Removed");
    } catch (error) {
      console.error("Error deleting team member:", error);
      setError("Failed to delete team member.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApprove = async (member: TeamMember) => {
    setIsSubmitting(true);
    try {
      const { fullName, bio, photo } = member;
      await axios.post("https://hook.eu2.make.com/uf3eiocr73hx954wzjahvdjqotsx8o2o", {
        fullName,
        bio,
        photo
      });
      await handleDelete(member.key);
      setModalMessage("Successfully Approved");
    } catch (error) {
      console.error("Error approving team member:", error);
      setError("Failed to approve team member.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = () => {
    if (
      username === process.env.NEXT_PUBLIC_AUTH_USERNAME &&
      password === process.env.NEXT_PUBLIC_AUTH_PASSWORD
    ) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="flex justify-center flex-col mt-[80px] items-center font-Oswald pb-10">
      {!isAuthenticated ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-4xl text-primary mb-10">Login</h1>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border-2 border-primary rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 border-primary rounded-md"
            />
            <button
              onClick={handleLogin}
              className="p-2 bg-primary text-white rounded-md"
            >
              Login
            </button>
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      ) : (
        <>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-between w-full px-4 mb-10">
              <button
                className={`p-3 ${view === 'submissions' ? 'bg-primary' : 'bg-secondary'} text-white font-semibold rounded-md shadow-lg`}
                onClick={() => setView('submissions')}
              >
                Employee Submissions
              </button>
              <button
                className={`p-3 ${view === 'list' ? 'bg-primary' : 'bg-secondary'} text-white font-semibold rounded-md shadow-lg`}
                onClick={() => setView('list')}
              >
                Employee List
              </button>
            </div>
            <h1 className="font-semibold text-4xl text-primary mt-[100px] mb-10">{view === 'submissions' ? 'EMPLOYEE SUBMISSIONS' : 'EMPLOYEE LIST'}</h1>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <svg className="animate-spin h-10 w-10 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              </div>
            ) : (
              teamMembers.length === 0 ? (
                <div className="text-2xl text-primary">No {view === 'submissions' ? 'submissions' : 'employees'} found.</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xxs:grid-cols-1 mt-[200px] gap-[200px]">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex justify-center items-center flex-col text-center relative">
                      {member.photo && (
                        <div
                          className="rounded-full bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                          onClick={() => openModal(member.fullName)}
                        >
                          <Image
                            src={member.photo}
                            alt={`Photo of ${member.fullName}`}
                            className="rounded-full w-[200px] h-[200px] object-cover"
                            height={200}
                            width={200}
                          />
                        </div>
                      )}
                      <h2 className="text-xl font-semibold text-primary mt-5">{member.fullName}</h2>
                      <p className="w-[240px] text-alt2">{member.bio}</p>
                      <button
                        className="absolute bottom-2 right-2 p-2 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={() => handleDelete(member.key)}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                          </svg>
                        ) : (
                          'Remove'
                        )}
                      </button>
                      {view === 'submissions' && (
                        <button
                          className="absolute bottom-2 left-2 p-2 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                          onClick={() => handleApprove(member)}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                          ) : (
                            'Approve'
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
          {teamMembers.map((member, index) => (
            <Transition
              key={index}
              show={open === member.fullName}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-100 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-80 opacity-0"
              as={Fragment}
            >
              <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                  <span className="inline-block h-screen align-middle" aria-hidden="true">
                    &#8203;
                  </span>

                  <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title as="h3" className="text-lg flex flex-col gap-3 justify-center items-center leading-6">
                      <p className="text-primary font-semibold text-3xl">{member.fullName}</p>
                    </Dialog.Title>
                    <div className="mt-2 text-center text-xl text-alt2 gap-4 flex flex-col">
                      {member.bio.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition>
          ))}
          <Transition
            show={!!modalMessage}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-100 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-80 opacity-0"
            as={Fragment}
          >
            <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => setModalMessage(null)}>
              <div className="min-h-screen px-4 text-center">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <span className="inline-block h-screen align-middle" aria-hidden="true">
                  &#8203;
                </span>

                <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg flex flex-col gap-3 justify-center items-center leading-6">
                    <p className="text-primary font-semibold text-3xl">{modalMessage}</p>
                  </Dialog.Title>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                      onClick={() => setModalMessage(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </section>
  );
};

export default AdminTeam;
