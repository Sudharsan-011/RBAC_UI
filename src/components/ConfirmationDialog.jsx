import React from "react";
import PropTypes from "prop-types";

const ConfirmationDialog = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* Dialog Title */}
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Dialog Message */}
        <p className="text-gray-700 mb-6">{message}</p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
