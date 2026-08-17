import useForm from "./useForm";

function ContactForm() {
    const { formData, handleChange, resetForm } = useForm({
        name: "",
        fathaerName: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Form submitted successfully!");

        resetForm();
    };

    return (
        <div>
            <h1>Contact Form</h1>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Mother Name */}
                <div>
                    <label>father Name</label>
                    <input
                        type="text"
                        name="motherName"
                        placeholder="Enter mother name"
                        value={formData.motherName}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div>
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Message */}
                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;