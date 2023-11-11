'use client'

const FormControls = ({ controls, formData, setFormData }) => {
    console.log("formData ", formData);
    return (
        controls.map((value) => (
            <div className="mb-4">
                <label className="black text-gray-800 text-sm font-bold mb-2">{value.label}</label>
                <input
                    placeholder={value.placeholder}
                    type={value.type}
                    name={value.name}
                    id={value.name}
                    // value={formData[value.name]}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            [value.name]: e.target.value
                        })
                    }}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
                />
            </div>
        ))
    )
}

export default FormControls;