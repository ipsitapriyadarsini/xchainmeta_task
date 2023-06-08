import { useGetData } from "../context"
import { useTheme } from '../context';

const HomePage = () => {
  const { userData } = useGetData()
  const { dark } = useTheme()
  return (
    <div className={`flex items-center m-40 ${dark && "text-gray-300"}`}>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData?.map((val, i) => (
            <tr key={i}>
              <td>{val.name.first + val.name.last}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.dob.age}</td>
              <td>{val.location.country}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage