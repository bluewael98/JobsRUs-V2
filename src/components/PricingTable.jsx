"use client";
import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import UseMediaQuery from "./UseMediaQuery";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    backgroundColor: "#E6E6FA",
    fontFamily: "Oswald",
  },
  table: {
    minWidth: 400,
  },

  tableCellHead: {
    fontSize: "30px",
    color: "#E6E6FA",
    backgroundColor: "#303FA1",
    fontFamily: "Oswald",
    padding: "40px",
    "@media (max-width: 767px)": {
      fontSize: "24px",
      padding: "20px",
    },
  },
  rowName: {
    fontSize: "18px",
    fontWeight: "bolder",
    fontFamily: "Oswald",
    color: "#303FA1",
    padding: "40px",
  },
  extendedTableHeader: {
    fontSize: "16px",
    fontWeight: "bold",
  },
});

function createData(
  name,
  price1,
  price2,
  price3,
  price4,
  price5,
  description1,
  description2,
  description3,
  description4,
  description5,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5
) {
  return {
    name,
    price1,
    price2,
    price3,
    price4,
    price5,
    description1,
    description2,
    description3,
    description4,
    description5,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
  };
}

const rows = [
  createData(
    "Employment support",
    "$64.04",
    "$70.56",
    "$90.14",
    "$116.24",
    "$142.35",
    "Weekday Daytime – TTP ",
    "Weekday Evening – TTP",
    "Saturday – TTP",
    "Sunday – TTP",
    "Public Holiday – TTP",
    "04_801_0133_5_1_T",
    "04_802_0133_5_1_T",
    "04_803_0133_5_1_T",
    "04_803_0133_5_1_T",
    "04_805_0133_5_1_T"
  ),
  createData(
    "Increased Social & Community Participation",
    "$70.87",
    "$70.87",
    "$70.87",
    "$70.87",
    "",
    "Life Transition Planning Incl. Mentoring Peer-Support And Indiv Skill Development",
    "Innovative Community Participation",
    "Community Participation Activities",
    "Skills Development And Training",
    "",
    "09_006_0106_6_3",
    "09_008_0116_6_3",
    "09_011_0125_6_3",
    "09_009_0117_6_3",
    ""
  ),
  createData(
    "SLES (School Leavers Employment Support)",
    "",
    "$70.87 ",
    "",
    "",
    "",
    "SLES is run as a 10 week program and reviewed in the two week holidays/break between the programs. During those two weeks we will review progress and outcomes and make recommendations for the following term.",
    "School Leaver Employment Supports",
    "",
    "",
    "",

    "",
    "10_021_0102_5_3",
    "",
    "",
    ""
  ),

  createData(
    "Employment counselling",
    "$193.99",
    "",
    "",
    "",
    "",
    "Employment Related Assessment & Counselling",
    "",
    "",
    "",
    "",
    "10_011_0128_5_3",
    "",
    "",
    "",
    ""
  ),
];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isSmallScreen = UseMediaQuery("(max-width: 470px)");

  return (
    <>
      <TableRow
        {...otherProps}
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer"
      >
        <TableCell padding="checkbox">
          <IconButton>
            {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          {isSmallScreen ? "" : <TableCell padding="checkbox" />}

          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function PricingTable() {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead} padding="checkbox" />
              <TableCell className={classes.tableCellHead}>
                Our Supports & Prices:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <ExpandableTableRow
                key={row.name}
                expandComponent={
                  <Table>
                    <TableRow>
                      <TableCell
                        align="left"
                        className={classes.extendedTableHeader}
                      >
                        Support Description
                      </TableCell>

                      <TableCell
                        align="left"
                        className={classes.extendedTableHeader}
                      >
                        Support Price (Per Hour)
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.extendedTableHeader}
                      >
                        Item Number
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{row.description1}</TableCell>
                      <TableCell align="left">{row.price1}</TableCell>
                      <TableCell align="right">{row.detail1}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{row.description2}</TableCell>
                      <TableCell align="left">{row.price2}</TableCell>
                      <TableCell align="right">{row.detail2}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{row.description3}</TableCell>
                      <TableCell align="left">{row.price3}</TableCell>
                      <TableCell align="right">{row.detail3}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{row.description4}</TableCell>
                      <TableCell align="left">{row.price4}</TableCell>
                      <TableCell align="right">{row.detail4}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">{row.description5}</TableCell>
                      <TableCell align="left">{row.price5}</TableCell>
                      <TableCell align="right">{row.detail5}</TableCell>
                    </TableRow>
                  </Table>
                }
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.rowName}
                >
                  {row.name}
                </TableCell>
              </ExpandableTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
