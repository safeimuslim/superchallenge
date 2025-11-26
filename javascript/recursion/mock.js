export const data = {
  company: {
    name: "Tech Corp",
    meta: {
      createdAt: "2024-01-01",
      tags: ["it", "software"],
    },
    departments: [
      {
        id: 1,
        name: "Sales",
        employees: [
          { id: 5, name: "Ammar", role: "Sales Executive" },
          { id: 6, name: "Nina", role: "Sales Lead" },
        ],
      },
      {
        id: 2,
        name: "Engineering",
        teams: [
          {
            teamName: "Frontend",
            employees: [
              { id: 7, name: "Safei", role: "Senior Frontend Engineer" },
              { id: 8, name: "Akira", role: "Frontend Engineer" },
            ],
          },
        ],
      },
    ],
  },
};
