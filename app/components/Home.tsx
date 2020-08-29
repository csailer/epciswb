import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EPCTranslator from './epc/EPCTranslator';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(3),
    width: 1900,
  },
  media: {
    height: 140,
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <div data-tid="container" className={classes.root}>
      <EPCTranslator />
    </div>
  );
}
