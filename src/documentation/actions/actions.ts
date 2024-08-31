import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setComponentsGroupIdActions } from '../store/slices/detector.slices';

const actions = { ...setComponentsGroupIdActions };

export const useActions = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  return bindActionCreators(actions, useAppDispatch());
};
