import React from "react";
import { Card } from "../components/Card";

import "./Main.scss";

export class Main extends React.Component {
  constructor() {
    super();

    let programs = [
      {
        id: 'lake-inniscarra',
        title: 'Lake Inniscarra, Ireland — Pyramid',
        time: '36:33',
        miles: '8,648 M'
      },
      {
        id: 'performance-series',
        title: 'Performance Series',
        workoutsCount: 9
      },
      {
        id: 'slow-pulls',
        title: 'Slow Pulls and Faster Intervals',
        time: '44:13',
        miles: '9,948 M'
      },
      {
        id: '20-minutes-to-toned',
        title: '20 Minutes to Toned',
        workoutsCount: 12
      },
      {
        id: 'charles-race',
        title: 'Charles Race, Boston, Massachusetts',
        time: '36:22',
        miles: '8,648 M'
      },
      {
        id: 'full-body-hiit',
        title: 'Full-Body HIIT Series',
      },
      {
        id: 'kafue-river',
        title: 'Kafue River, Zambia — Power Stroke',
        time: '22:22',
        miles: '4,660 M'
      },
      {
        id: 'shred-and-burn',
        title: 'Shred & Burn Series',
        workoutsCount: 16
      },
    ];

    programs.forEach(p => {
      p.thumb = './images/' + p.id + '-thumb.jpg';
      p.trainer = './images/' + p.id + '-trainer.jpg';
    });

    this.state = { programs };
  }

  render() {
    return (
      <div className="wrap">
        {
          this.state.programs.map(p => {
            return <Card key={p.id} program={p} />
          })
        }
      </div>
    );
  }
}
