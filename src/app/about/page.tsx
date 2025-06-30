import Navbar from "@/components/Navbar";

export default function FullstackSpeedrunPage() {
  return (

    <main className="max-w-3xl mx-auto px-6 py-12 text-white">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">30in30: Fullstack Speedrun Challenge</h1>

      <p className="mb-6">
        For every day in July, I will be creating a fullstack app from scratch. I will be
        gamifying the process by speedrunning the fullstack development each day. I have created
        speedrun splits that cannot be skipped that will ensure I'm following best practices and
        enforce consistency between runs.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Motivation</h2>
      <p className="mb-6">
        I've recently been doing a lot of fullstack development and have aspirations of creating
        and shipping high-quality products in the future. I have a few ideas that I'd really like
        to go all-in on, but I fear that my fullstack development proficiency isn't at a point
        where I can do these ideas justice through the entire process.
      </p>
      <p className="mb-6">
        I also find myself starting new projects, forgetting the basics, and getting really
        frustrated at myself for having to look things up, or worse, turn to an LLM. I think that
        the solution to this is some high-quality practice, and I think this challenge will be a
        highly efficient and enjoyable way to get that practice.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Rules</h2>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        <li>
          <strong>No Copied Code:</strong> Even if it is my own code, the motivation behind this is
          to get my reps in. Therefore all code in the project must be written by hand (or generated
          by something like create-react-app).
        </li>
        <li>
          <strong>No AI Assistance:</strong> If I need help or clarification on a topic, I must read
          documentation. Receiving help from an LLM often provides help too quickly and too
          specifically, as well as expanding beyond the scope of the question. For the sake of
          improvement, relying on LLMs is completely prohibited.
        </li>
        <li>
          <strong>Alternate Web and Mobile Apps:</strong> I want to improve both my web and mobile
          development, so I will be alternating between deploying web apps and mobile apps.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Requirements / Splits</h2>
      <p className="mb-6">
        Creating a fullstack app every day is a little ambiguous, so here are specific requirements
        that must be met in order for me to consider a product a complete fullstack app. These are
        also what I will be using as my splits:
      </p>

      <div className="space-y-8">
        {[
          {
            title: '1. Initialization and Setup',
            checklist: [
              'Generate the project',
              'Initialize front and back ends',
              'Have a functioning development preview',
            ],
            complete: 'You can run "npm run dev" or a similar command and also start the backend server.',
          },
          {
            title: '2. Core Data Modelling',
            checklist: [
              'Decide where data will be stored',
              'Create an ERD',
              'Establish an ORM connection',
              'Add the schema to the code',
            ],
            complete: 'You have an ERD and a matching schema connected to an ORM.',
          },
          {
            title: '3. API Endpoints (CRUD)',
            checklist: [
              'Create backend API routes for CRUD functionality',
              'Test the routes with Postman or Insomnia',
            ],
            complete: 'All CRUD routes return correct responses with proper status codes.',
          },
          {
            title: '4. Basic Frontend Integration',
            checklist: [
              'Basic page/component structure setup',
              'Forms/input fields to interact with backend APIs',
            ],
            complete: 'You can successfully perform CRUD operations through the UI.',
          },
          {
            title: '5. Authentication',
            checklist: [
              'Implement sign up, log in, log out',
              'JWT/session management',
            ],
            complete: 'Users can sign up, log in, and log out.',
          },
          {
            title: '6. State and Data Fetching',
            checklist: [
              'Implement global state management',
              'Properly fetch and cache data',
            ],
            complete: 'State is managed efficiently. No unnecessary re-renders, data fetched and cached appropriately.',
          },
          {
            title: '7. UI Polish and Responsiveness',
            checklist: [
              'Add CSS',
              'Make the app fully responsive',
            ],
            complete: 'UI looks clean and is fully responsive.',
          },
          {
            title: '8. Testing and Validation',
            checklist: [
              'Basic frontend testing (Jest, React Testing Library)',
              'Basic backend testing (Supertest)',
              'Basic schema validation (Zod)',
            ],
            complete: 'Core frontend and backend tests pass, validations in place and working.',
          },
          {
            title: '9. Deployment',
            checklist: ['Deploy the app either to my website or TestFlight'],
            complete: 'App is fully functional from my phone.',
          },
        ].map(({ title, checklist, complete }) => (
          <div key={title}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc list-inside mb-2 text-gray-200">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-green-700 font-medium">
              <strong>Complete if:</strong> {complete}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Tracking Progress</h2>
      <p className="mb-6">
        I've made a dedicated{' '}
        <a
          href="https://jimmer.dev/30in30"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          page
        </a>{' '}
         for this process that displays all of the dates and automatically
        updates a timeline each time I make a push to the corresponding GitHub repo. All of the
        repos will be contained in the organization at{' '}
        <a
          href="https://github.com/30in30"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          github.com/30in30
        </a>{' '}
        in order to make it easier to fetch using the GitHub API.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Thoughts</h2>
      <p>
        I'm hoping that these steps will be applicable to every app that I make, but I'm sure there
        will be some obstacles and setbacks. I will deal with them when I get there!
      </p>
    </main>
  );
}
