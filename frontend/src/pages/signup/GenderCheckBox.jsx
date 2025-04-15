import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex justify-center'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-amber-50'>Male</span>
                        <input type='checkbox' className='checkbox mr-5 bg-amber-50' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-amber-50'>Female</span>
                    <input type='checkbox' className='checkbox mr-5 bg-amber-50' />
                    </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-amber-50'>Other</span>
                    <input type='checkbox' className='checkbox bg-amber-50' />
                    </label>
            </div>
        </div>
        
    );
};
export default GenderCheckbox;