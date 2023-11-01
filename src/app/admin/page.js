'use client'

const AdminView = () => {
    const menuItem = [
        {
            id: 'home',
            label: 'home'
        }, {
            id: 'about',
            label: 'About'
        }, {
            id: 'experience',
            label: 'Experience'
        }, {
            id: 'education',
            label: 'Education'
        }, {
            id: 'project',
            label: 'Project'
        }, {
            id: 'contact',
            label: 'Contact'
        },
    ]

    return (
        <>
            <div className="border-b border-gray-200">
                <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
                    {
                        menuItem?.map((value) => (
                            <button
                                key={value.id}
                                type="button"
                                className="p-4 font-bold text-xl text-black"
                            >
                                {value.label}
                            </button>
                        ))
                    }
                </nav>
                <div className="mt-10">

                </div>
            </div>
        </>
    )
}

export default AdminView;