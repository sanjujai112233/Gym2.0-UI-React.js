import { useState } from "react";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    plan: "",
    joiningDate: "",
};

function MemberForm() {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     gender: "",
    //     dob: "",
    //     plan: "",
    //     joiningDate: "",
    // });

    const [formData, setFormData] = useState(initialFormData);
    const [success, setSuccess] = useState("");



    //handle more filed in one method
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Validation
    const validation = () => {
        const newErrors = {};
        const today = new Date().toISOString().split("T")[0];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.name.trim) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {

            newErrors.phone = "Phone is required";

        } else if (!phoneRegex.test(formData.phone)) {

            newErrors.phone =
                "Enter a valid 10-digit phone number";

        }


        // Gender
        if (!formData.gender) {
            newErrors.gender = "Please select gender";
        }


        // DOB
        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        }
        else if (formData.dob > today) {
            newErrors.dob = "Date of birth can't be greater than today";
        }


        // Plan
        if (!formData.plan) {
            newErrors.plan = "Please select a plan";
        }


        // Joining Date
        if (!formData.joiningDate) {
            newErrors.joiningDate = "Joining date is required";
        }
        else if (formData.joiningDate > formData.dob) {
            newErrors.joiningDate = "Joining date can't be before dob";
        }
        else if (formData.joiningDate > today) {
            newErrors.joiningDate = "Joining date can't be future";
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
        // if newerrors have 0 error then 0 === 0 ? true : false


    }
    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();


        if (!validation()) {
            return;
        }
        console.log("Member Details: ", formData);
        setSuccess("Member added successfully!");
        setFormData(initialFormData);
    };

    const [errors, setError] = useState({});




    return (
        <div className="container mt-4">
            <div className="card">

                <div className="card-body">

                    <h3 className="mb-4">
                        Add Member
                    </h3>
                    <form onSubmit={handleSubmit}>

                        <div className="row g-3">

                            {/* Name */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? "is-invalid" : ""
                                        }`}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {
                                    errors.name && (
                                        <div className="invalid-feedback">
                                            {error.name}
                                        </div>
                                    )
                                }

                            </div>

                            {/* Email */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""
                                        }`}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {
                                    errors.email && (
                                        <div className="invalid-feedback">
                                            {error.name}
                                        </div>
                                    )
                                }
                            </div>

                            {/* Phone */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Gender */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Gender
                                </label>

                                <select
                                    className="form-select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* DOB */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Plan */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Plan
                                </label>

                                <select
                                    className="form-select"
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select Plan
                                    </option>

                                    <option value="Basic">
                                        Basic
                                    </option>

                                    <option value="Premium">
                                        Premium
                                    </option>

                                    <option value="Annual">
                                        Annual
                                    </option>
                                </select>
                            </div>

                            {/* Joining Date */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    name="joiningDate"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <button type="submit" className="btn btn-primary mt-4">
                            Add Member
                        </button>
                    </form>

                    {success && (
                        <div className="alert alert-success mt-3">
                            {success}
                        </div>

                    )

                    }
                </div>

            </div>

        </div>

    );
}

export default MemberForm;