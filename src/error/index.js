// * Error Message
const errorMessage = (success, status, message, error) => {
  return {
    success,
    status,
    message,
    error,
  };
};

// Export
export default errorMessage;
