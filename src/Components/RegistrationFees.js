
import FeesCard from './FeesCard';
import "./RegistrationFees.css";

const RegistrationFees = () => {
    return (
        <div className="RegistrationFees">
            <h2>Registration And Fees</h2>

            <div className="d-flex">
                <FeesCard duration="Full Day" time="(8:45 - 3:15)" fees="$48" />
                <FeesCard duration="Morning" time="(8:45 - 12:00)" fees="$24" />
                <FeesCard duration="Afternoon" time="(12:15 - 3:15)" fees="$24" />
                <FeesCard duration="Extended Morning" time="(8:45 - 1:00)" fees="$32" />
            </div>

            <p>
                Children who attend Extended Morning session will have lunch before home time. Parents provide packed lunches.
            </p>

            <strong>
                *Fees are all inclusive of healthy snack, essentials, extra-curricular activities, resources, etc.
            </strong>

            <ul>
                <li className='m-20'>
                    <strong>Minimum sessions</strong> 
                    <p>Children must be registered for minimum of three sessions.</p>
                </li>

                <li className='m-20'>
                    <strong>Registration</strong>
                    <p>Download the registration form here</p>
                    <p>Registration fees: $50</p>
                    <p>Deposit: $100</p>
                </li>

                <li className='m-20'>
                    <strong>Funding</strong>
                    <p>
                        At Maple Montessor, we accept Terrific Twos and 15 or 30 hours funding.Parents have to apply for the additional 15 hours and provide the nursery with the code. These are deducted from the fees.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default RegistrationFees;