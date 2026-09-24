import { useForm } from "react-hook-form";

function AddMember() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mt-4">

            <h2>Add Member</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">

                    <label className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        className={`form-control ${
                            errors.name ? "is-invalid" : ""
                        }`}
                        {...register("name", {
                            required: "Name is required"
                        })}
                    /> 

                    {errors.name && (
                        <div className="invalid-feedback">
                            {errors.name.message}
                        </div>
                    )}

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        {...register("email", {
                            required: "Email is required"
                        })}
                    />

                    {errors.email && (
                        <div className="invalid-feedback">
                            {errors.email.message}
                        </div>
                    )}

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Member
                </button>

            </form>

        </div>
    );
}

export default AddMember;