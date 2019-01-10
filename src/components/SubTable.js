import React, { Component } from "react";
import ReactTable from "react-table";

export default class SubTable extends Component {
  render() {
    const { moves } = this.props;
    const SUBTABLEHEADER = [6, 8];
    const TESTSUBTABLE = [
      {
        damage: 9,
        angle: 110,
        kbGrowth: 120,
        weightDepKb: 0,
        hitboxInteraction: 3,
        baseKb: 40,
        element: "slash",
        shieldDamage: 0,
        hitGrounded: true,
        hitAirborne: true
      },
      {
        damage: 9,
        angle: 361,
        kbGrowth: 118,
        weightDepKb: 0,
        hitboxInteraction: 3,
        baseKb: 40,
        element: "slash",
        shieldDamage: 0,
        hitGrounded: true,
        hitAirborne: true
      },
      {
        damage: 8,
        angle: 361,
        kbGrowth: 116,
        weightDepKb: 0,
        hitboxInteraction: 3,
        baseKb: 40,
        element: "slash",
        shieldDamage: 0,
        hitGrounded: true,
        hitAirborne: true
      },
      {
        damage: 12,
        angle: 110,
        kbGrowth: 100,
        weightDepKb: 0,
        hitboxInteraction: 3,
        baseKb: 50,
        element: "slash",
        shieldDamage: 0,
        hitGrounded: true,
        hitAirborne: true
      }
    ];

    const columns = [
      {
        Header: `Hitboxes for frames ${SUBTABLEHEADER[0]} - ${
          SUBTABLEHEADER[1]
        }`,
        columns: [
          {
            Header: "Damage",
            id: "damage",
            accessor: d => d.damage,
            minWidth: 50,
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Angle",
            id: "angle",
            accessor: d => d.angle,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Base Knockback",
            id: "baseKb",
            accessor: d => d.baseKb,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Knockback Growth",
            id: "kbGrowth",
            accessor: d => d.kbGrowth,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Knockback Scaling",
            id: "weightDepKb",
            accessor: d => d.weightDepKb,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Shield Damage",
            id: "shieldDamage",
            accessor: d => d.shieldDamage,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          },
          {
            Header: "Attack Effect",
            id: "element",
            accessor: d => d.element,
            minWidth: 50,
            headerStyle: { whiteSpace: "normal" },
            style: { whiteSpace: "normal", textAlign: "center" }
          }
        ]
      }
    ];

    return (
      <div style={{ padding: "20px" }}>
        <ReactTable
          data={TESTSUBTABLE}
          columns={columns}
          showPagination={false}
          defaultPageSize={TESTSUBTABLE.length}
          resizable={false}
        />
      </div>
    );
  }
}

/**
 * roundCardsList is an List of CardsData = Array of Arrays
 *    Each CardsData Array contains 4 items
 *        The move, The answer, the users choice, and whether or not it was correct
 */
