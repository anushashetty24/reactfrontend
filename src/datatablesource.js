export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "department",
    headerName: "Department",
    width: 100,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Shruti Patel",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "SD Interns",
    email: "shruti.patel@quantiphi.com",
    age: 21,
  },
  {
    id: 2,
    username: "Suprith V",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "suprith.v@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 3,
    username: "Anusha Shetty",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anusha.shetty@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 4,
    username: "Shivam Jaiswal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "shivam.jaiswal@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 5,
    username: "Ravichandra Nayak",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ravichandra.nayak@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 6,
    username: "Monica Geller",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "monica.geller@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 7,
    username: "Phoebe Buffay",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "phoebe.buffay@quatiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 8,
    username: "Joey Tribbiani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "joey.tribbiani@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 9,
    username: "Chandler Bing",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "chandler.bing@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 10,
    username: "Ross Geller",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ross.geller@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
  {
    id: 11,
    username: "Rachel Green",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rachel.green@quantiphi.com",
    department: "SD Interns",
    age: 21,
  },
];
