import { Form } from "remix";

export default function ContactForm() {
  return (
    <fieldset>
      <Form className="space-y-3">
        <div className="flex flex-col items-start">
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="p-1.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-700 w-full transition focus:outline-none focus:ring-offset-2"
            id="name"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="p-1.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-700 w-full transition focus:outline-none focus:ring-offset-2"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="p-1.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-700 w-full transition focus:outline-none focus:ring-offset-2 resize-none"
            name="message"
            rows={4}
          />
        </div>
        <div className="!mt-6">
          <button className="w-full px-1 py-2 text-white transition bg-gray-700 rounded-md hover:bg-gray-600 active:bg-gray-800 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:ring-offset-2">
            Submit
          </button>
        </div>
      </Form>
    </fieldset>
  );
}
