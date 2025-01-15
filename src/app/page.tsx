import { getData } from "@/actions";
import { HomePage } from "@/components";

export const Home = async () => {
  // const data = await getData();

  const data = {
    "experiences": [
      {
          "id": "cm5xqlkr02nel07l4ozb275va",
          "title": "Programming Eductation",
          "company": "KCM",
          "location": "Markaryd",
          "startDate": "2019-08-25",
          "endDate": "2020-06-11",
          "description": "Basic programming with Python",
          "responsibilities": [],
          "skills": [
              {
                  "id": "cm5xqksz02y1307l7v5vgxhp8",
                  "title": "Python",
                  "slug": "python",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              }
          ],
          "achievements": [],
          "tags": [
              "Python"
          ]
      },
      {
        "id": "cm5xq04nl2eld07l4vmn9tavm",
        "title": "Front-end Developer Education",
        "company": "EC Utbildning",
        "location": "Växjö",
        "startDate": "2023-03-13",
        "endDate": "2025-01-24",
        "description": "Front-end Developer Education.",
        "responsibilities": [],
        "skills": [
          {
              "id": "cm4a5gz5i1afz07l3puee45bd",
              "title": "HTML",
              "slug": "html",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          },
          {
              "id": "cm4a5gby116q807lbv2cnlw5y",
              "title": "CSS",
              "slug": "css",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          },
          {
              "id": "cm4a598ao13su07mk5ah7wvfh",
              "title": "JavaScript",
              "slug": "javascript",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          },
          {
              "id": "cm4a4zmj7118w07lb830p2yh4",
              "title": "React",
              "slug": "react",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          },
          {
              "id": "cm5xpz2nh2e3l07l41jv9xhck",
              "title": "Angular",
              "slug": "angular",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
          },
          {
              "id": "cm4a59sdg16ha07l3d98rre67",
              "title": "TypeScript",
              "slug": "typescript",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          },
          {
              "id": "cm4a5fpik18nz07l3se72w0jr",
              "title": "C#",
              "slug": "csharp",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          },
          {
              "id": "cm4a5j2jd1cvw07l334kv2mk0",
              "title": "MongoDB",
              "slug": "mongodb",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
          },
          {
              "id": "cm4a562x2155j07l3oo4fepzn",
              "title": "Docker",
              "slug": "docker",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
          },
          {
              "id": "cm4a547c312sv07lb8jj5a190",
              "title": "PostgreSQL",
              "slug": "postgresql",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
          },
          {
              "id": "cm4a6w0q81pk007lbko8pzae3",
              "title": "Tailwind CSS",
              "slug": "tailwindcss",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          },
          {
              "id": "cm4a5sos71e8f07mk9bponce6",
              "title": "Trello",
              "slug": "trello",
              "icon": null,
              "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original-wordmark.svg"
          }
        ],
        "achievements": [],
        "tags": [
          "Front-end",
          "Back-end",
          "Database",
          "Object Oriented Programming",
          "Agile"
        ]
      },
      {
          "id": "cm4bfz19g1sye07l5vsszwodk",
          "title": "Internship",
          "company": "Consid",
          "location": "Ljungby",
          "startDate": "2024-04-01",
          "endDate": "2024-06-21",
          "description": "It was during this internship which I created the projects TripTrek, TypeSpeed and Dino GUI.",
          "responsibilities": [],
          "skills": [
              {
                  "id": "cm4a9pqzj0mpy07l1b06kejzc",
                  "title": "ExpressJS",
                  "slug": "expressjs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              },
              {
                  "id": "cm4a99y7b0jal07l1od5p32lg",
                  "title": "Stripe",
                  "slug": "stripe",
                  "icon": null,
                  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
              },
              {
                  "id": "cm4a5s1gv1h6u07l3asz14eey",
                  "title": "THREEjs",
                  "slug": "threejs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg"
              },
              {
                  "id": "cm4a5kqou1bm107lb0riklgsp",
                  "title": "Figma",
                  "slug": "figma",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              },
              {
                  "id": "cm4a585lt15tm07l3tp2rj1xk",
                  "title": "Java",
                  "slug": "java",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              },
              {
                  "id": "cm4a552tp132h07lbw6pak668",
                  "title": "Prisma",
                  "slug": "prisma",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              },
              {
                  "id": "cm4a528kz129307lbhmogp0zv",
                  "title": "Vercel",
                  "slug": "vercel",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
              }
          ],
          "achievements": [],
          "tags": [
              "Web Development",
              "Frontend",
              "Backend",
              "Fullstack",
              "UX / UI",
              "Database"
          ]
      },
      {
          "id": "cm5xowtiq201z07l473s9gh7t",
          "title": "Internship",
          "company": "Consid",
          "location": "Ljungby",
          "startDate": "2024-10-20",
          "endDate": "2025-01-24",
          "description": "During this internship I single handedly developed a website from scratch till production for the company Smör & Bröd by Linda.",
          "responsibilities": [],
          "skills": [
              {
                  "id": "cm4a51dkk120307lbrg2csl23",
                  "title": "Nextjs",
                  "slug": "nextjs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              },
              {
                  "id": "cm4a5ckyi158c07lbipml5lke",
                  "title": "GraphQL",
                  "slug": "graphql",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg"
              }
          ],
          "achievements": [],
          "tags": [
              "Fullstack",
              "Headless CMS",
              "Customer Interaction"
          ]
      }
    ],
    "skills": [
      {
          "id": "cm4a4zmj7118w07lb830p2yh4",
          "title": "React",
          "slug": "react",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      },
      {
          "id": "cm4a51dkk120307lbrg2csl23",
          "title": "Nextjs",
          "slug": "nextjs",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
      },
      {
          "id": "cm4a528kz129307lbhmogp0zv",
          "title": "Vercel",
          "slug": "vercel",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
      },
      {
          "id": "cm4a547c312sv07lb8jj5a190",
          "title": "PostgreSQL",
          "slug": "postgresql",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
      },
      {
          "id": "cm4a552tp132h07lbw6pak668",
          "title": "Prisma",
          "slug": "prisma",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
      },
      {
          "id": "cm4a562x2155j07l3oo4fepzn",
          "title": "Docker",
          "slug": "docker",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
      },
      {
          "id": "cm4a585lt15tm07l3tp2rj1xk",
          "title": "Java",
          "slug": "java",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
      },
      {
          "id": "cm4a598ao13su07mk5ah7wvfh",
          "title": "JavaScript",
          "slug": "javascript",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      },
      {
          "id": "cm4a59sdg16ha07l3d98rre67",
          "title": "TypeScript",
          "slug": "typescript",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      },
      {
          "id": "cm4a5av3414ta07lbenxel088",
          "title": "Vue",
          "slug": "vue",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
      },
      {
          "id": "cm4a5btdn14db07mkp6g9td4m",
          "title": "Svelte",
          "slug": "svelte",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
      },
      {
          "id": "cm4a5ckyi158c07lbipml5lke",
          "title": "GraphQL",
          "slug": "graphql",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg"
      },
      {
          "id": "cm4a5eq1a15w207lbk5byb4f0",
          "title": "C++",
          "slug": "cplusplus",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
      },
      {
          "id": "cm4a5fpik18nz07l3se72w0jr",
          "title": "C#",
          "slug": "csharp",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
      },
      {
          "id": "cm4a5gby116q807lbv2cnlw5y",
          "title": "CSS",
          "slug": "css",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      },
      {
          "id": "cm4a5gz5i1afz07l3puee45bd",
          "title": "HTML",
          "slug": "html",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      },
      {
          "id": "cm4a5j2jd1cvw07l334kv2mk0",
          "title": "MongoDB",
          "slug": "mongodb",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
      },
      {
          "id": "cm4a5k0x41dpf07l3bwz919a1",
          "title": "Firebase",
          "slug": "firebase",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
      },
      {
          "id": "cm4a5kqou1bm107lb0riklgsp",
          "title": "Figma",
          "slug": "figma",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      },
      {
          "id": "cm4a5s1gv1h6u07l3asz14eey",
          "title": "THREEjs",
          "slug": "threejs",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg"
      },
      {
          "id": "cm4a5sos71e8f07mk9bponce6",
          "title": "Trello",
          "slug": "trello",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original-wordmark.svg"
      },
      {
          "id": "cm4a6i3dv1l5m07mkkpq7mzgv",
          "title": "Vitejs",
          "slug": "vitejs",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
      },
      {
          "id": "cm4a6opcu1qsb07l3sezopj0b",
          "title": "Swing",
          "slug": "swing",
          "icon": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a6ocyx1qoq07l3nr63nye0",
              "width": 413,
              "height": 312
          },
          "iconUrl": null
      },
      {
          "id": "cm4a6w0q81pk007lbko8pzae3",
          "title": "Tailwind CSS",
          "slug": "tailwindcss",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      },
      {
          "id": "cm4a6xyv91p7y07mkxo1bicfc",
          "title": "React Native",
          "slug": "reactnative",
          "icon": null,
          "iconUrl": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
      },
      {
          "id": "cm4a6zb1d1qqt07lbu3zp32vi",
          "title": "Expo",
          "slug": "expo",
          "icon": null,
          "iconUrl": "https://www.svgrepo.com/show/341805/expo.svg"
      },
      {
          "id": "cm4a72qrj1v0t07l3sv0f12gm",
          "title": "PHP",
          "slug": "php",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
      },
      {
          "id": "cm4a74ubm00gy07mlj3d0h8t6",
          "title": "Sass",
          "slug": "sass",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
      },
      {
          "id": "cm4a7k1z503aa07ml5athd79i",
          "title": "Android Studio",
          "slug": "android-studio",
          "icon": null,
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
      },
      {
          "id": "cm4a99y7b0jal07l1od5p32lg",
          "title": "Stripe",
          "slug": "stripe",
          "icon": null,
          "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
      },
      {
          "id": "cm4a9pqzj0mpy07l1b06kejzc",
          "title": "ExpressJS",
          "slug": "expressjs",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
      },
      {
          "id": "cm5xpz2nh2e3l07l41jv9xhck",
          "title": "Angular",
          "slug": "angular",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
      },
      {
          "id": "cm5xqksz02y1307l7v5vgxhp8",
          "title": "Python",
          "slug": "python",
          "icon": null,
          "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      }
    ],
    "projects": [
      {
          "id": "cm4a85x3s090907l1g7ypyc8r",
          "title": "Uber Eats",
          "slug": "uber-eats",
          "description": "This is my first project in app development with the goal of learning about React Native and Expo while using Android Studio to do so.",
          "githubLink": null,
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xmovg05fi608mktj8k4gbu",
              "width": 0,
              "height": 0
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85odv0ac007l5cagscyav",
                  "width": 339,
                  "height": 735
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeb08t007l1acinz7sc",
                  "width": 342,
                  "height": 730
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oea098907ml9x3sjboq",
                  "width": 340,
                  "height": 733
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeo08t507l13ozwd5a5",
                  "width": 342,
                  "height": 730
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oe50acc07l5p0mb2069",
                  "width": 342,
                  "height": 729
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oeg098f07ml6gnykhxu",
                  "width": 342,
                  "height": 730
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a85oer0ack07l510smjez0",
                  "width": 340,
                  "height": 734
              }
          ],
          "skills": [
              {
                  "id": "cm4a7k1z503aa07ml5athd79i",
                  "title": "Android Studio",
                  "slug": "android-studio",
                  "icon": null,
                  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
              },
              {
                  "id": "cm4a6xyv91p7y07mkxo1bicfc",
                  "title": "React Native",
                  "slug": "reactnative",
                  "icon": null,
                  "iconUrl": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
              },
              {
                  "id": "cm4a6zb1d1qqt07lbu3zp32vi",
                  "title": "Expo",
                  "slug": "expo",
                  "icon": null,
                  "iconUrl": "https://www.svgrepo.com/show/341805/expo.svg"
              },
              {
                  "id": "cm4a598ao13su07mk5ah7wvfh",
                  "title": "JavaScript",
                  "slug": "javascript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4a8c2070bzu07l5vlv94gmy",
          "title": "Uber",
          "slug": "uber",
          "description": "This is my second project in app development with the goal of learning about React Native and Expo while using Android Studio to do so. I had focus on the transportational side of Uber where you can book a driver to drive you from your location to your final destination.",
          "githubLink": null,
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xmnxb95f0008mkuuicoe06",
              "width": 0,
              "height": 0
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brko0bvp07l58wby6bs2",
                  "width": 341,
                  "height": 731
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brkx0akf07mlm0nu3pqn",
                  "width": 342,
                  "height": 730
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brl00bvu07l52pj1cjii",
                  "width": 340,
                  "height": 734
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brkx0akh07mlhqp5ukg7",
                  "width": 342,
                  "height": 730
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8brlk0bvz07l5phic3ujk",
                  "width": 341,
                  "height": 731
              }
          ],
          "skills": [
              {
                  "id": "cm4a7k1z503aa07ml5athd79i",
                  "title": "Android Studio",
                  "slug": "android-studio",
                  "icon": null,
                  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"
              },
              {
                  "id": "cm4a6xyv91p7y07mkxo1bicfc",
                  "title": "React Native",
                  "slug": "reactnative",
                  "icon": null,
                  "iconUrl": "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
              },
              {
                  "id": "cm4a6zb1d1qqt07lbu3zp32vi",
                  "title": "Expo",
                  "slug": "expo",
                  "icon": null,
                  "iconUrl": "https://www.svgrepo.com/show/341805/expo.svg"
              },
              {
                  "id": "cm4a598ao13su07mk5ah7wvfh",
                  "title": "JavaScript",
                  "slug": "javascript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4a8iuff0cfc07l1vgfs83rp",
          "title": "TMDB",
          "slug": "tmdb",
          "description": "A React project were I am using the tmdb api to fetch data and then display it with good design and the goal of creating a user friendly site to find a new movie to watch.",
          "githubLink": "https://github.com/GITZMBE/tmdb-2.0",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xml2d75e6108mkgaqkw0v7",
              "width": 240,
              "height": 240
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5l0cr507mlm4h968hy",
                  "width": 1979,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5t0cdx07l1fqghrv7x",
                  "width": 1983,
                  "height": 1228
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5n0dov07l5c18n6ksw",
                  "width": 1978,
                  "height": 1227
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik6a0ce407l18txhcp5p",
                  "width": 1980,
                  "height": 1225
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik5y0cra07mlc6rze7x7",
                  "width": 1977,
                  "height": 1223
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8ik670ce207l1xmxob6pi",
                  "width": 1982,
                  "height": 1222
              }
          ],
          "skills": [
              {
                  "id": "cm4a6w0q81pk007lbko8pzae3",
                  "title": "Tailwind CSS",
                  "slug": "tailwindcss",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              },
              {
                  "id": "cm4a598ao13su07mk5ah7wvfh",
                  "title": "JavaScript",
                  "slug": "javascript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              },
              {
                  "id": "cm4a4zmj7118w07lb830p2yh4",
                  "title": "React",
                  "slug": "react",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4a8s7ow0f0l07mlvr3qzgwi",
          "title": "Spotify",
          "slug": "spotify",
          "description": "In this project I am creating a Spotify clone were I am getting more familiar with reading open source documentation of an API.",
          "githubLink": "https://github.com/GITZMBE/Spotify-2.0",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xtda3f0ip107mommogfux2",
              "width": 0,
              "height": 0
          },
          "logo": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4bet04719mv06mn6pkeds4u",
              "width": 1982,
              "height": 2046
          },
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw610e9207l10stytf92",
                  "width": 2541,
                  "height": 1222
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6t0ff907l5o7fqx2vm",
                  "width": 2542,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6e0erh07mlabtujq37",
                  "width": 2542,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6h0e9807l114px9r22",
                  "width": 2543,
                  "height": 1227
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6x0ffb07l5oi95iouo",
                  "width": 2544,
                  "height": 1225
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a8qw6r0ern07mlgp5aqzdv",
                  "width": 2541,
                  "height": 1223
              }
          ],
          "skills": [
              {
                  "id": "cm4a4zmj7118w07lb830p2yh4",
                  "title": "React",
                  "slug": "react",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              },
              {
                  "id": "cm4a598ao13su07mk5ah7wvfh",
                  "title": "JavaScript",
                  "slug": "javascript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              },
              {
                  "id": "cm4a6w0q81pk007lbko8pzae3",
                  "title": "Tailwind CSS",
                  "slug": "tailwindcss",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4a9hdya0l9k07l14pevlfex",
          "title": "TripTrek",
          "slug": "triptrek",
          "description": "One of my most series projects were I got introduced to Nextjs, GraphQL and Vercel as well as many other technologies as payment methods like Stripe and multiple open source JavaScript libraries. It is a service where you are both able to rent others listings and rent out your own apartments. The payments are being handled through Stripe and you are also able to chat with your landlord as well as getting a receipt when the payment has gone through.",
          "githubLink": "https://github.com/GITZMBE/TripTrek",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4bekon117he06mfrq72k913",
              "width": 2000,
              "height": 464
          },
          "logo": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4bekon117he06mfrq72k913",
              "width": 2000,
              "height": 464
          },
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy6l0kq807mldquo5t4y",
                  "width": 2553,
                  "height": 1223
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy6p0mcq07l5jhkbfjjr",
                  "width": 2549,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy6v0mcv07l5fivut3aw",
                  "width": 2548,
                  "height": 1227
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy740kqf07mlzvrnort6",
                  "width": 2557,
                  "height": 1221
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy6i0l3107l1o04bgvmw",
                  "width": 2557,
                  "height": 1223
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy8c0kqw07ml5ymifgu0",
                  "width": 2559,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy760md107l5ptbk7jt0",
                  "width": 2547,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy710l3807l1l7sc43fu",
                  "width": 2544,
                  "height": 1221
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy7m0kql07mlxy3b88m6",
                  "width": 2549,
                  "height": 1225
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9gy880kqr07ml1bhg01p5",
                  "width": 2549,
                  "height": 1222
              }
          ],
          "skills": [
              {
                  "id": "cm4a51dkk120307lbrg2csl23",
                  "title": "Nextjs",
                  "slug": "nextjs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              },
              {
                  "id": "cm4a59sdg16ha07l3d98rre67",
                  "title": "TypeScript",
                  "slug": "typescript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              },
              {
                  "id": "cm4a547c312sv07lb8jj5a190",
                  "title": "PostgreSQL",
                  "slug": "postgresql",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
              },
              {
                  "id": "cm4a5ckyi158c07lbipml5lke",
                  "title": "GraphQL",
                  "slug": "graphql",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg"
              },
              {
                  "id": "cm4a552tp132h07lbw6pak668",
                  "title": "Prisma",
                  "slug": "prisma",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              },
              {
                  "id": "cm4a528kz129307lbhmogp0zv",
                  "title": "Vercel",
                  "slug": "vercel",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
              },
              {
                  "id": "cm4a99y7b0jal07l1od5p32lg",
                  "title": "Stripe",
                  "slug": "stripe",
                  "icon": null,
                  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
              },
              {
                  "id": "cm4a6w0q81pk007lbko8pzae3",
                  "title": "Tailwind CSS",
                  "slug": "tailwindcss",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              },
              {
                  "id": "cm4a5s1gv1h6u07l3asz14eey",
                  "title": "THREEjs",
                  "slug": "threejs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg"
              },
              {
                  "id": "cm4a5kqou1bm107lb0riklgsp",
                  "title": "Figma",
                  "slug": "figma",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              }
          ],
          "hostingLink": "https://triptrek.vercel.app/"
      },
      {
          "id": "cm4aa0nqp0rhz07l5s2mi81v0",
          "title": "TypeSpeed",
          "slug": "typespeed",
          "description": "A FullStack project with both a frontend and a backend created specifically for this project. The Frontend is made with Nextjs & TypeScript and the Backend uses ExpressJS to manage the api routes to the database which is currently under development and is locally hosting a PostgreSQL database using Docker. It is also featuring a login system using Next Auth. The point of the website is to be able to test your typing speed at the same time as you are leveling up your account and are able to compare your own score with other users on the site.",
          "githubLink": "https://github.com/GITZMBE/TypeSpeed",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xn10rc5lxh08mk46odzl71",
              "width": 0,
              "height": 0
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1up0mwh07l1sqbwqr9p",
                  "width": 2557,
                  "height": 1227
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1uv0mwn07l1shp591hr",
                  "width": 2556,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r22v0okt07l5fool0twk",
                  "width": 2559,
                  "height": 1224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1v50mws07l1b7jvuc8x",
                  "width": 2558,
                  "height": 1223
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1v90mw907mlmy02ityt",
                  "width": 2542,
                  "height": 1196
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1vz0mx207l1rxfkv4aw",
                  "width": 2557,
                  "height": 1223
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r1vb0mwx07l1mpke3oza",
                  "width": 2542,
                  "height": 1220
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a9r23w0okz07l5af0mbxs9",
                  "width": 2558,
                  "height": 1224
              }
          ],
          "skills": [
              {
                  "id": "cm4a9pqzj0mpy07l1b06kejzc",
                  "title": "ExpressJS",
                  "slug": "expressjs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              },
              {
                  "id": "cm4a51dkk120307lbrg2csl23",
                  "title": "Nextjs",
                  "slug": "nextjs",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              },
              {
                  "id": "cm4a547c312sv07lb8jj5a190",
                  "title": "PostgreSQL",
                  "slug": "postgresql",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
              },
              {
                  "id": "cm4a562x2155j07l3oo4fepzn",
                  "title": "Docker",
                  "slug": "docker",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
              },
              {
                  "id": "cm4a59sdg16ha07l3d98rre67",
                  "title": "TypeScript",
                  "slug": "typescript",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4aabskj0sxp07ml4srmg95l",
          "title": "Dino GUI",
          "slug": "dinogui",
          "description": "I was starting to get interested in learning other programming languages as well as Game Development so I started to create a GUI with Java together with the framework Swing were you are able to play my version of the Chrome Dino Game in a GUI format.",
          "githubLink": "https://github.com/GITZMBE/DinoGUI",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xn3cdf5our08mko0ljmze6",
              "width": 1920,
              "height": 1080
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64yp0r9e07mliluig4l5",
                  "width": 922,
                  "height": 618
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64za0sx107l5jv3lsata",
                  "width": 922,
                  "height": 618
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64za0rf207l1r3tze3sp",
                  "width": 924,
                  "height": 618
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aa64zp0rf707l1ua1vr1b2",
                  "width": 922,
                  "height": 619
              }
          ],
          "skills": [
              {
                  "id": "cm4a585lt15tm07l3tp2rj1xk",
                  "title": "Java",
                  "slug": "java",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              },
              {
                  "id": "cm4a6opcu1qsb07l3sezopj0b",
                  "title": "Swing",
                  "slug": "swing",
                  "icon": {
                      "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4a6ocyx1qoq07l3nr63nye0",
                      "width": 413,
                      "height": 312
                  },
                  "iconUrl": null
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4aaja450wlr07l18ic6z3dg",
          "title": "Snake Game",
          "slug": "snake-game",
          "description": "further more I was trying to get introduced to other Object Oriented Programming languages, so I started this project with is written in C++ which is my version of the arcade game Snake and is being played in the terminal and controlled with WASD-keys.",
          "githubLink": "https://github.com/GITZMBE/Snake",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xmvesh5imd08mkw5tbunfe",
              "width": 350,
              "height": 350
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1j30w9507mlnd0p43wi",
                  "width": 679,
                  "height": 224
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1jn0yah07l5wgdotbh2",
                  "width": 673,
                  "height": 218
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1jv0yaj07l5cpqg3bcf",
                  "width": 686,
                  "height": 169
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aaj1kf0wga07l1h4dlml8t",
                  "width": 673,
                  "height": 216
              }
          ],
          "skills": [
              {
                  "id": "cm4a5eq1a15w207lbk5byb4f0",
                  "title": "C++",
                  "slug": "cplusplus",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4aau96g12xp07l5er199xrf",
          "title": "User Generator",
          "slug": "user-generator",
          "description": "This is a project with the purpose of creating user data for newly created website with no current users so it can be populated with dummy users to not look unused and more serious before it has attracted its first batch of users. It is using an open source user generator API to generate the users and then it has the ability to both login and creating an account as well as storing your generated users in a Firebase database for performance friendly realtime updates when editing data on the website.",
          "githubLink": "https://github.com/GITZMBE/UserGenerator",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xn21cr5s3y08mqthxjgql3",
              "width": 0,
              "height": 0
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfoi10us07l5ud00731f",
                  "width": 1917,
                  "height": 907
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfo20yts07mlse6303t8",
                  "width": 1916,
                  "height": 907
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfov10ux07l5rc7kjn3d",
                  "width": 1918,
                  "height": 906
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfr10ytx07mltznuezel",
                  "width": 1919,
                  "height": 909
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfpk0zby07l10q5ocnru",
                  "width": 1919,
                  "height": 912
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4aapfri10v207l5dm9nlvsl",
                  "width": 1916,
                  "height": 906
              }
          ],
          "skills": [
              {
                  "id": "cm4a5av3414ta07lbenxel088",
                  "title": "Vue",
                  "slug": "vue",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              },
              {
                  "id": "cm4a5k0x41dpf07l3bwz919a1",
                  "title": "Firebase",
                  "slug": "firebase",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4b07geo84u107mlchinybus",
          "title": "Pro Dictionary",
          "slug": "pro-dictionary",
          "description": "This is an application were you are able to find and learn new word, popular searches as well as making your own searches for definitions.",
          "githubLink": "https://github.com/GITZMBE/ProDictionary",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xnen2q76vg08mq63y4i4lc",
              "width": 480,
              "height": 360
          },
          "logo": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4beyzd71d8f07l5vcrc87e7",
              "width": 500,
              "height": 500
          },
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b06msl84sz07mlpgn4kziu",
                  "width": 1915,
                  "height": 904
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b06mtf87od07l5hq4fg8d9",
                  "width": 1916,
                  "height": 906
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b06mtn86p107l1incqwbhl",
                  "width": 1919,
                  "height": 908
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b06mvd86p607l1vo9jyud1",
                  "width": 1919,
                  "height": 906
              }
          ],
          "skills": [
              {
                  "id": "cm4a5btdn14db07mkp6g9td4m",
                  "title": "Svelte",
                  "slug": "svelte",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
              }
          ],
          "hostingLink": null
      },
      {
          "id": "cm4b09lug859n07ml0u8dupek",
          "title": "Chatbot",
          "slug": "chatbot",
          "description": "A chatbot made in PHP together with the ChatGPT API.",
          "githubLink": "https://github.com/GITZMBE/ChatBot",
          "banner": {
              "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm5xtksxj0on607mogq65o3u2",
              "width": 0,
              "height": 0
          },
          "logo": null,
          "images": [
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b098z7858o07mlbjj5sde3",
                  "width": 1916,
                  "height": 912
              },
              {
                  "url": "https://eu-west-2.graphassets.com/cm420b9lg0fus07mien4cgadm/cm4b098z6874907l1pahjal6s",
                  "width": 1918,
                  "height": 908
              }
          ],
          "skills": [
              {
                  "id": "cm4a72qrj1v0t07l3sv0f12gm",
                  "title": "PHP",
                  "slug": "php",
                  "icon": null,
                  "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
              }
          ],
          "hostingLink": null
      }
    ]
  };

  return (
    <div className="w-screen h-screen">
      <HomePage data={data} />
    </div>
  );
};

export default Home;
