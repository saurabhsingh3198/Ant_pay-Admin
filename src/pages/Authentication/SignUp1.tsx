import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
import { FaAddressCard } from 'react-icons/fa';
import { LiaFingerprintSolid } from 'react-icons/lia';
import siteConfig from '../../util/siteConfig';
import axios from 'axios';

const SignUp1: React.FC = () => {
  const [fieldData, setFieldData] = useState({
    phone: '',
    full_name: '',
    email: '',
    user_type: '',
    dob_or_incorporation: '',
    pan_number: '',
    address_line: '',
    state: '',
    city: '',
    pincode: '',
    gst_number: '',
  });

  const handleRegister = async () => {
    const payload = {
      phone: fieldData.phone,
      full_name: fieldData.full_name,
      email: fieldData.email,
      user_type: fieldData.user_type,
      dob_or_incorporation: fieldData.dob_or_incorporation,
      pan_number: fieldData.pan_number,
      address_line: fieldData.address_line,
      state: fieldData.state,
      city: fieldData.city,
      pincode: fieldData.pincode,
    };
    try {
      const responseData = await axios.post(`${siteConfig.REGISTER}`, payload);
      console.log('Response: ', responseData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      {/* <Breadcrumb pageName="Sign Up" /> */}

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              {/* <span className="mb-1.5 block font-medium">Start for free</span> */}
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Portal
              </h2>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={fieldData.full_name}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          full_name: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={fieldData.email}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <SelectGroupTwo />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      value={fieldData.address_line}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          address_line: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <FaAddressCard size={22} />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    ID Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your ID Number"
                      value={fieldData.pan_number}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          pan_number: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <LiaFingerprintSolid size={24} />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    GST Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your GST Number"
                      value={fieldData.gst_number}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          gst_number: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 16.5C10.4477 16.5 10 16.0523 10 15.5V12.5C10 11.9477 10.4477 11.5 11 11.5C11.5523 11.5 12 11.9477 12 12.5V15.5C12 16.0523 11.5523 16.5 11 16.5ZM11 9.5C10.4477 9.5 10 9.0523 10 8.5V5.5C10 4.9477 10.4477 4.5 11 4.5C11.5523 4.5 12 4.9477 12 5.5V8.5C12 9.0523 11.5523 9.5 11 9.5ZM15 6.5C14.4477 6.5 14 6.9477 14 7.5C14 8.0523 14.4477 8.5 15 8.5C15.5523 8.5 16 8.0523 16 7.5C16 6.9477 15.5523 6.5 15 6.5ZM7 6.5C6.4477 6.5 6 6.9477 6 7.5C6 8.0523 6.4477 8.5 7 8.5C7.5523 8.5 8 8.0523 8 7.5C8 6.9477 7.5523 6.5 7 6.5Z"
                        />
                        <path
                          fill="currentColor"
                          d="M5 13.5C5 13.2239 5.22386 13 5.5 13H16.5C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14H5.5C5.22386 14 5 13.7761 5 13.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Attach Profile Photo
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={fieldData.full_name}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          full_name: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={fieldData.email}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <SelectGroupTwo />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      value={fieldData.address_line}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          address_line: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <FaAddressCard size={22} />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    ID Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your ID Number"
                      value={fieldData.pan_number}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          pan_number: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <LiaFingerprintSolid size={24} />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    GST Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your GST Number"
                      value={fieldData.gst_number}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFieldData((prev: any) => ({
                          ...prev,
                          gst_number: e.target.value,
                        }))
                      }
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 16.5C10.4477 16.5 10 16.0523 10 15.5V12.5C10 11.9477 10.4477 11.5 11 11.5C11.5523 11.5 12 11.9477 12 12.5V15.5C12 16.0523 11.5523 16.5 11 16.5ZM11 9.5C10.4477 9.5 10 9.0523 10 8.5V5.5C10 4.9477 10.4477 4.5 11 4.5C11.5523 4.5 12 4.9477 12 5.5V8.5C12 9.0523 11.5523 9.5 11 9.5ZM15 6.5C14.4477 6.5 14 6.9477 14 7.5C14 8.0523 14.4477 8.5 15 8.5C15.5523 8.5 16 8.0523 16 7.5C16 6.9477 15.5523 6.5 15 6.5ZM7 6.5C6.4477 6.5 6 6.9477 6 7.5C6 8.0523 6.4477 8.5 7 8.5C7.5523 8.5 8 8.0523 8 7.5C8 6.9477 7.5523 6.5 7 6.5Z"
                        />
                        <path
                          fill="currentColor"
                          d="M5 13.5C5 13.2239 5.22386 13 5.5 13H16.5C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14H5.5C5.22386 14 5 13.7761 5 13.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Attach Profile Photo
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp1;