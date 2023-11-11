'use client'

import FormControls from "../form-controls";

const AdminHomeView = () => {
    const controls = [
        {
            name: "heading",
            placeholder: "Enter heading text",
            type: "text",
            label: "Enter heading text"
        },
        {
            name: "Summery",
            placeholder: "Enter career summery",
            type: "text",
            label: "Enter career summery"
        },

    ]
    return (
        <>
            <div className="w-full">
                <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormControls
                        controls={controls}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminHomeView;