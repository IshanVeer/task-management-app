export const initialBoardData = {
  boards: [
    {
      id: "1",
      name: "Platform Launch",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              id: "task-1",
              title: "Build UI for onboarding flow",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-2",
              title: "Build UI for search",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-3",
              title: "Build settings UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-4",
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [
            {
              id: "task-5",
              title: "Design settings and search pages",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-6",
              title: "Add account management endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-7",
              title: "Design onboarding flow",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-8",
              title: "Add search enpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-9",
              title: "Add authentication endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-10",
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Done",
          tasks: [
            {
              id: "task-11",
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-12",
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "Done",
              subtasks: [
                {
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-13",
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "Done",
              subtasks: [
                {
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-14",
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-15",
              title: "Market discovery",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "Done",
              subtasks: [
                {
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-16",
              title: "Competitor analysis",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              id: "task-17",
              title: "Research the market",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "Done",
              subtasks: [
                {
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Marketing Plan",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              id: "task-18",
              title: "Plan Product Hunt launch",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Find hunter",
                  isCompleted: false,
                },
                {
                  title: "Gather assets",
                  isCompleted: false,
                },
                {
                  title: "Draft product page",
                  isCompleted: false,
                },
                {
                  title: "Notify customers",
                  isCompleted: false,
                },
                {
                  title: "Notify network",
                  isCompleted: false,
                },
                {
                  title: "Launch!",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-19",
              title: "Share on Show HN",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Draft out HN post",
                  isCompleted: false,
                },
                {
                  title: "Get feedback and refine",
                  isCompleted: false,
                },
                {
                  title: "Publish post",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-20",
              title: "Write launch article to publish on multiple channels",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Write article",
                  isCompleted: false,
                },
                {
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                },
                {
                  title: "Publish on Inndie Hackers",
                  isCompleted: false,
                },
                {
                  title: "Publish on Medium",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [],
        },
        {
          name: "Done",
          tasks: [],
        },
      ],
    },
    {
      id: "3",
      name: "Roadmap",
      columns: [
        {
          name: "Now",
          tasks: [
            {
              id: "task-21",
              title: "Launch version one",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                },
                {
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                },
              ],
            },
            {
              id: "task-22",
              title: "Review early feedback and plan next steps for roadmap",
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: "",
              subtasks: [
                {
                  title: "Interview 10 customers",
                  isCompleted: false,
                },
                {
                  title: "Review common customer pain points and suggestions",
                  isCompleted: false,
                },
                {
                  title: "Outline next steps for our roadmap",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Next",
          tasks: [],
        },
        {
          name: "Later",
          tasks: [],
        },
      ],
    },
  ],
};
