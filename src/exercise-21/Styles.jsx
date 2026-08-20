import React from "react";

const Styles = () => {
  const courses = [
    {
      name: "React Fundamentals",
      progress: 75,
      next: "Components & Props",
      teacher: "Sarah Wilson",
    },
    {
      name: "JavaScript Advanced",
      progress: 45,
      next: "Async/Await",
      teacher: "Mike Johnson",
    },
    {
      name: "UI/UX Design",
      progress: 90,
      next: "Color Theory",
      teacher: "Emily Chen",
    },
  ];

  const assignments = [
    {
      name: "Build a Todo App",
      course: "React Fundamentals",
      status: "pending",
      date: "2024-03-20",
    },
    {
      name: "API Integration",
      course: "JavaScript Advanced",
      status: "completed",
      date: "2024-03-18",
    },
    {
      name: "Design System",
      course: "UI/UX Design",
      status: "in-progress",
      date: "2024-03-25",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-gray-800 md:p-8">
      
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Welcome back, Student!
          </h1>

          <p className="mt-1 text-sm text-gray-500 md:text-base">
            Here's what's happening with your courses today.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative text-2xl">
            🔔
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white">
            S
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="text-3xl">📊</div>
          <div>
            <p className="text-sm text-gray-500">Average Grade</p>
            <h2 className="text-2xl font-bold">88%</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="text-3xl">📚</div>
          <div>
            <p className="text-sm text-gray-500">Courses</p>
            <h2 className="text-2xl font-bold">3</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="text-3xl">⏰</div>
          <div>
            <p className="text-sm text-gray-500">Study Hours</p>
            <h2 className="text-2xl font-bold">45h</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="text-3xl">✍️</div>
          <div>
            <p className="text-sm text-gray-500">Assignments</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* COURSE PROGRESS */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-5 text-lg font-bold">
            Course Progress
          </h2>

          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.name}
                className="rounded-lg bg-gray-50 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">
                    {course.name}
                  </span>

                  <span className="text-sm text-gray-500">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  ></div>
                </div>

                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>
                    Next: {course.next}
                  </span>

                  <span>
                    {course.teacher}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* UPCOMING ASSIGNMENTS */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold">
              Upcoming Assignments
            </h2>

            <div className="space-y-5">
              {assignments.map((assignment) => (
                <div
                  key={assignment.name}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <h3 className="font-medium">
                      {assignment.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {assignment.course}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Due {assignment.date}
                    </p>
                  </div>

                  <span
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                      assignment.status === "pending"
                        ? "bg-red-100 text-red-500"
                        : assignment.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold">
              Announcements
            </h2>

            <div className="space-y-5">

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">
                  New Course Available
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Check out our new TypeScript course!
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  2 hours ago
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">
                  Maintenance Notice
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Platform updates scheduled for tonight
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  5 hours ago
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Styles;