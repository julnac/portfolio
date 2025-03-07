type Project = {
    slug: string,
    title: string;
    description: string;
    link: string;
    images: string[];
};
  
  const projects: Project[] = [
    {
      slug: "access-map",
      title: "Access Map",
      description: "An admin dashboard with analytics and user management.",
      link: "https://accessmap.com",
      images: [
        "/images/access-map/home.png",
        "/images/access-map/solution.png",
        "/images/access-map/path.png",
        "/images/access-map/ekrany.png",
        "/images/access-map/viz.png"
      ],
    },
    {
      slug: "sezo",
      title: "Sezo App",
      description: "A full-featured e-commerce platform built with Next.js and Tailwind CSS.",
      link: "https://sezo.com",
      images: [
        "/images/sezo/register.png",
        "/images/sezo/home.png",
      ],
    },
    {
      slug: "zielony-majster-homepage",
      title: "Zielony Majster Homepage",
      description: "An admin dashboard with analytics and user management.",
      link: "https://zielonymajster.com",
      images: [
        "/images/zielony-majster/home.png"
      ],
    },
    {
      slug: "pokedex",
      title: "Pokedex",
      description: "An admin dashboard with analytics and user management.",
      link: "https://pokedex.com",
      images: [
        "/images/pokedex/home.png",
        "/images/pokedex/card.png",
        "/images/pokedex/favoriet.png",
        "/images/pokedex/comparison.png",
      ],
    },
    {
      slug: "latarnik-wyborczy",
      title: "Latarnik wyborczy",
      description: "The project was created at the request of the 'Gdańskie Forum Samorządowe' to create a survey for voters in local government elections in 2024. The survey compares the user's responses with the responses of election committees. The results are represented on a bar chart that indicates the percentage of agreement between views.",
      link: "https://gdanskilatarnik.pl/",
      images: [
        "/images/latarnik/home.png",
        "/images/latarnik/ankieta.png",
        "/images/latarnik/wyniki.png",
        "/images/latarnik/footer.png"
      ],
    },
    
  ];
  
  export default projects;
  