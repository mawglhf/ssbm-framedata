import React, { Component } from "react";
import ReactTable from "react-table";

export default class MovesTable extends Component {
  render() {
    const { moves } = this.props;
    const TESTMOVES = [
      {
        name: "Down Tilt",
        startup: 6,
        active: "7-9",
        totalActive: 3,
        iasa: 20,
        totalFrames: 49
      },
      {
        name: "Up Tilt",
        startup: 5,
        active: "6-12",
        totalActive: 7,
        iasa: 32,
        totalFrames: 39
      }
    ];

    const columns = [
      {
        Header: "Move",
        id: "name",
        accessor: d => d.name,
        minWidth: 50,
        style: { whiteSpace: "normal", textAlign: "center" }
      },
      {
        Header: "Startup",
        id: "startup",
        accessor: d => d.startup,
        minWidth: 50,
        headerStyle: { whiteSpace: "normal" },
        style: { whiteSpace: "normal", textAlign: "center" }
      },
      {
        Header: "Active Frames",
        id: "active",
        accessor: d => d.active,
        minWidth: 50,
        headerStyle: { whiteSpace: "normal" },
        style: { whiteSpace: "normal", textAlign: "center" }
      },
      {
        Header: "Total Active Frames",
        id: "totalActive",
        accessor: d => d.totalActive,
        minWidth: 50,
        headerStyle: { whiteSpace: "normal" },
        style: { whiteSpace: "normal", textAlign: "center" }
      },
      {
        Header: "IASA",
        id: "iasa",
        accessor: d => d.iasa,
        minWidth: 50,
        headerStyle: { whiteSpace: "normal" },
        style: { whiteSpace: "normal", textAlign: "center" }
      },
      {
        Header: "Total Frames",
        id: "totalFrames",
        accessor: d => d.totalFrames,
        minWidth: 50,
        headerStyle: { whiteSpace: "normal" },
        style: { whiteSpace: "normal", textAlign: "center" }
      }
    ];

    return (
      <ReactTable
        data={TESTMOVES}
        columns={columns}
        showPagination={false}
        defaultPageSize={TESTMOVES.length}
        resizable={false}
      />
    );
  }
}

/**
 * roundCardsList is an List of CardsData = Array of Arrays
 *    Each CardsData Array contains 4 items
 *        The move, The answer, the users choice, and whether or not it was correct
 */
