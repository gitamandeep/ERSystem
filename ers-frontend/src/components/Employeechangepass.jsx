import React from 'react';
import { useState, useRef } from 'react';
import EmployeeNavbar from './EmployeeNavbar';
import Empoloyeeaside from './Empoloyeeaside';

const Employeechangepass = () => {
    const [first, setfirst] = useState({});
    const [passwordError, setPasswordError] = useState(""); // To store the password validation error message

    // Separate refs for each input and icon
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const oldEyeRef = useRef();
    const newEyeRef = useRef();
    const confirmEyeRef = useRef();

    // Toggle password visibility for each input
    const togglePasswordVisibility = (passwordRef, eyeRef) => {
        if (eyeRef.current.src.includes("closeeyes.svg")) {
            eyeRef.current.src = "eyes.svg";
            passwordRef.current.type = "text";
        } else {
            eyeRef.current.src = "closeeyes.svg";
            passwordRef.current.type = "password";
        }
    };

    const handleChange = (e) => {
        setfirst({ ...first, [e.target.name]: e.target.value });
        setPasswordError(""); // Reset the password error message on change
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        const upperCasePattern = /[A-Z]/;

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }

        if (!specialCharPattern.test(password)) {
            return "Password must contain at least one special character.";
        }

        if (!upperCasePattern.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }

        return ""; // If the password meets all criteria, return an empty string
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Retrieve the stored user object from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user")); // Convert JSON string to object
    
        // Access the password from the storedUser object
        const storedPassword = storedUser?.password; // Use optional chaining to avoid errors if storedUser is null
    
        console.log(storedPassword);
    
        // Check if the old password matches the stored password
        if (first.oldpassword !== storedPassword) {
            setPasswordError("Old password is incorrect.");
            return; // Prevent form submission if validation fails
        }
    
        // Validate the new password
        const passwordValidationMessage = validatePassword(first.newpassword || "");
    
        if (passwordValidationMessage) {
            setPasswordError(passwordValidationMessage);
            return; // Prevent form submission if validation fails
        }
    
        // Check if new password matches confirm password
        if (first.newpassword !== first.confirmpassword) {
            setPasswordError("New password and confirmation password do not match.");
            return;
        }
    
        // Update the password in the storedUser object
        storedUser.password = first.newpassword;
    
        // Save the updated user object back to localStorage
        localStorage.setItem("user", JSON.stringify(storedUser)); // Convert object back to JSON string
    
        // Handle success message or redirection
        alert("Password changed successfully!");
    
        // Clear the form fields
        setfirst({});
    };
    

    return (
        <>
            <div className="absolute top-0 z-[-2] h-[129vh] w-[98.75vw] bg-gray-100"></div>
            <EmployeeNavbar />
            <div className="flex h-screen text-black container mx-auto rounded-xl mb-16 font-custom">
                <Empoloyeeaside />
                <main className="w-3/4 p-8 bg-slate-50 border border-gray-200 rounded-e-3xl">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Change Password</h2>
                    </div>
                    <hr />

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="ml-2 mt-6">
                            {/* Old Password */}
                            <div className="p-1 m-2 mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Old Password</label>
                                <div className="relative w-4/6">
                                    <input
                                        ref={oldPasswordRef}
                                        type="password"
                                        name="oldpassword"
                                        className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full pr-10"
                                        value={first.oldpassword || ""}
                                        onChange={handleChange}
                                    />
                                    <div
                                        onClick={() => togglePasswordVisibility(oldPasswordRef, oldEyeRef)}
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    >
                                        <img ref={oldEyeRef} src="closeeyes.svg" alt="Toggle Password Visibility" />
                                    </div>
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="p-1 m-2 mb-4 relative">
                                <label className="block text-sm font-medium mb-2">New Password</label>
                                <div className="relative w-4/6">
                                    <input
                                        ref={newPasswordRef}
                                        type="password"
                                        name="newpassword"
                                        className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full pr-10"
                                        value={first.newpassword || ""}
                                        onChange={handleChange}
                                    />
                                    <div
                                        onClick={() => togglePasswordVisibility(newPasswordRef, newEyeRef)}
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    >
                                        <img ref={newEyeRef} src="closeeyes.svg" alt="Toggle Password Visibility" />
                                    </div>
                                </div>
                                {/* Password Error Message */}
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="p-1 m-2 mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Re-enter Password</label>
                                <div className="relative w-4/6">
                                    <input
                                        ref={confirmPasswordRef}
                                        type="password"
                                        name="confirmpassword"
                                        className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full pr-10"
                                        value={first.confirmpassword || ""}
                                        onChange={handleChange}
                                    />
                                    <div
                                        onClick={() => togglePasswordVisibility(confirmPasswordRef, confirmEyeRef)}
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    >
                                        <img ref={confirmEyeRef} src="closeeyes.svg" alt="Toggle Password Visibility" />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="p-1 m-2 mb-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Employeechangepass;
