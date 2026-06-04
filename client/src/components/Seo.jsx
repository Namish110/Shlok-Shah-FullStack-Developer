import { useEffect } from "react";
import { faqs } from "../content/faq";

const siteMeta = {
  title: "Shlok Shah | .NET Developer Portfolio",
  description:
    "Portfolio of Shlok Shah, a full-stack .NET developer building scalable ASP.NET Core, Web API, SQL Server, and React applications.",
  siteName: "Shlok Shah Portfolio",
  imagePath: "/profile.jpg",
  locale: "en_IN",
  type: "website",
  author: "Shlok Shah",
  sameAs: ["https://github.com/Namish110", "https://www.linkedin.com/in/shlokshahdeveloper"],
};

function upsertTag(selector, tagName, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, data) {
  let script = document.head.querySelector(`#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export default function Seo() {
  useEffect(() => {
    const url = new URL(window.location.pathname, window.location.origin).toString();
    const image = new URL(siteMeta.imagePath, window.location.origin).toString();

    document.title = siteMeta.title;
    document.documentElement.lang = "en";

    upsertTag('meta[name="description"]', "meta", {
      name: "description",
      content: siteMeta.description,
    });
    upsertTag('meta[name="author"]', "meta", {
      name: "author",
      content: siteMeta.author,
    });
    upsertTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    upsertTag('meta[name="googlebot"]', "meta", {
      name: "googlebot",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    upsertTag('meta[name="theme-color"]', "meta", {
      name: "theme-color",
      content: "#050a12",
    });
    upsertTag('meta[name="referrer"]', "meta", {
      name: "referrer",
      content: "strict-origin-when-cross-origin",
    });
    upsertTag('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: siteMeta.title,
    });
    upsertTag('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: siteMeta.description,
    });
    upsertTag('meta[property="og:type"]', "meta", {
      property: "og:type",
      content: siteMeta.type,
    });
    upsertTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: url,
    });
    upsertTag('meta[property="og:site_name"]', "meta", {
      property: "og:site_name",
      content: siteMeta.siteName,
    });
    upsertTag('meta[property="og:locale"]', "meta", {
      property: "og:locale",
      content: siteMeta.locale,
    });
    upsertTag('meta[property="og:image"]', "meta", {
      property: "og:image",
      content: image,
    });
    upsertTag('meta[property="og:image:alt"]', "meta", {
      property: "og:image:alt",
      content: "Portrait of Shlok Shah",
    });
    upsertTag('meta[name="twitter:card"]', "meta", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertTag('meta[name="twitter:title"]', "meta", {
      name: "twitter:title",
      content: siteMeta.title,
    });
    upsertTag('meta[name="twitter:description"]', "meta", {
      name: "twitter:description",
      content: siteMeta.description,
    });
    upsertTag('meta[name="twitter:image"]', "meta", {
      name: "twitter:image",
      content: image,
    });
    upsertTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: url,
    });

    upsertJsonLd("schema-graph", {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${url}#website`,
          url,
          name: siteMeta.siteName,
          description: siteMeta.description,
          inLanguage: "en-IN",
        },
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: siteMeta.title,
          description: siteMeta.description,
          isPartOf: { "@id": `${url}#website` },
          inLanguage: "en-IN",
        },
        {
          "@type": "Person",
          "@id": `${url}#person`,
          name: "Shlok Shah",
          jobTitle: ".NET Developer",
          description: siteMeta.description,
          image,
          sameAs: siteMeta.sameAs,
          worksFor: {
            "@type": "Organization",
            name: "Independent / Open to Work",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Delhi",
            addressCountry: "IN",
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    });
  }, []);

  return null;
}
