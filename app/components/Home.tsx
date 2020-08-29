import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import routes from '../constants/routes.json';

export default function Home(): JSX.Element {
  return (
    <div data-tid="container">
      <h2>Home</h2>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
