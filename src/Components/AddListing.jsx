import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

function AddListing() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <p
          onClick={() => navigate("/")}
          className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer w-fit mb-6"
        >
          ← Back to home page
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Add a new listing
        </h1>
        <p className="text-gray-500 mb-6">
          Fill in the details below to list your property on Realco.
        </p>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block font-medium mb-1">Property title</label>
            <input
              type="text"
              placeholder="e.g. Modern 3-bed penthouse in Lekki"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Property type</label>
              <select className="w-full border rounded-lg px-4 py-3">
                <option>House</option>
                <option>Apartment</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Listing type</label>
              <select className="w-full border rounded-lg px-4 py-3">
                <option>For sale</option>
                <option>For rent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="City, address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">Bedrooms</label>
              <input
                type="number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Bathrooms</label>
              <input
                type="number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Size (sqft)</label>
              <input
                type="number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              rows={4}
              placeholder="Describe the property..."
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Photos</label>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              accept="image/*"
              className="hidden"
            />

            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed rounded-lg py-8 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-indigo-400 hover:text-indigo-500 transition-colors"
            >
              <Upload size={24} className="mb-2" />
              <span className="text-sm">Click or drag photos to upload</span>
            </div>

            {files.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg mt-2 transition-colors"
          >
            Publish listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
