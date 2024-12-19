import { User, Calendar, Mail, Phone } from 'lucide-react';

export default function Profile() {
  // Mock user data - in a real app, this would come from authentication/database
  const user = {
    name: 'Nibedan Pati',
    email: 'Nibedanpati@gmail.com',
    mobile: '+91 8851558046',
    registerDate: new Date('2023-06-15')
  };

  return (
    <div className=" bg-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-blue-500 mb-4">{user.name}</h1>
          <p className="text-xl text-blue-600 opacity-80">TechHive E-Commerce User</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Email */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md border border-blue-100 flex items-center space-x-6">
            <Mail className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500">Email Address</h3>
              <p className="text-2xl font-bold text-blue-500">{user.email}</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md border border-blue-100 flex items-center space-x-6">
            <Phone className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500">Mobile Number</h3>
              <p className="text-2xl font-bold text-blue-500">{user.mobile}</p>
            </div>
          </div>

          {/* Register Date */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md border border-blue-100 flex items-center space-x-6">
            <Calendar className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500">Registration Date</h3>
              <p className="text-2xl font-bold text-blue-500">
                {user.registerDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* User ID */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md border border-blue-100 flex items-center space-x-6">
            <User className="text-blue-500 w-12 h-12" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500">User Identifier</h3>
              <p className="text-2xl font-bold text-blue-500">EC-{Math.floor(Math.random() * 10000)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
