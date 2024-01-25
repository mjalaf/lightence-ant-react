import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { notificationController } from '@app/controllers/notificationController';
import type * as React from 'react';
import { message } from 'antd';

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    notificationController.error({ message: action.payload as React.ReactNode });
    console.log(message);
  }

  return next(action);
};
