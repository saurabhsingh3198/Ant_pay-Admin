import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../custom/TextInput';
import SelectInput from '../../custom/SelectInput';
import DatePickerInput from '../../custom/DatePickerInput';
import FileUploadInput from '../../custom/FileUploadInput';
import { Link } from 'react-router-dom';

const initialValues = {
  full_name: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',
  user_type: '',
  pan_number: '',
  gst_number: '',
  aadhaar_number: '',
  address: '',
  state: '',
  city: '',
  pin_code: '',
  profilePic: null,
  panCard: null,
  aadhaarCard: null,
};

const FILE_SIZE = 1024 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
];

const fileValidation = Yup.mixed()
  .required('File is required')
  .test('fileSize', 'File too large', (value: any) =>
    value ? value.size <= FILE_SIZE : true,
  )
  .test('fileFormat', 'Unsupported Format', (value: any) =>
    value ? SUPPORTED_FORMATS.includes(value.type) : true,
  );

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Only digits allowed')
    .min(10, 'Phone must be 10 digits')
    .required('Phone number is required'),
  gender: Yup.string().required('Please select gender'),
  dob: Yup.date().required('Date is required'),
  user_type: Yup.string().required('Please select user type'),
  pan_number: Yup.string().required('PAN number is required'),
  gst_number: Yup.string().required('GST number is required'),
  aadhaar_number: Yup.string().required('Aadhaar number is required'),
  address: Yup.string().required('Address is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  pin_code: Yup.string()
    .matches(/^\d{6}$/, 'Pin code must be 6 digits')
    .required('Pin code is required'),
  profilePic: fileValidation,
  panCard: fileValidation,
  aadhaarCard: fileValidation,
});

export default function SignUp1() {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="w-full border-stroke dark:border-strokedark">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign Up to Portal
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Submitted data:', values);
              }}
            >
              <Form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    label="Name"
                    name="full_name"
                    placeholder="Enter your full name"
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                  <SelectInput
                    label="Gender"
                    name="gender"
                    options={['Male', 'Female']}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <DatePickerInput name="dob" label="Date of Birth" />
                  <SelectInput
                    label="Select User Type"
                    name="user_type"
                    options={['Buddy', 'Bizbuddy']}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    label="Pan Number"
                    name="pan_number"
                    placeholder="Enter your pan number"
                  />
                  <TextInput
                    label="GST Number"
                    name="gst_number"
                    placeholder="Enter your gst number"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    label="Aadhaar Number"
                    name="aadhaar_number"
                    placeholder="Enter your aadhaar number"
                  />
                  <TextInput
                    label="Address"
                    name="address"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <SelectInput
                    label="State"
                    name="state"
                    options={['UP', 'HARYANA']}
                  />

                  <SelectInput
                    label="City"
                    name="city"
                    options={['Gorakhpur', 'Gurugram']}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    label="Pin Code"
                    name="pin_code"
                    placeholder="Enter your pin code"
                  />
                  <FileUploadInput
                    name="profilePic"
                    label="Upload Profile Picture"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FileUploadInput name="panCard" label="Upload Pan Card" />
                  <FileUploadInput
                    name="aadhaarCard"
                    label="Upload Aadhaar Card"
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
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
