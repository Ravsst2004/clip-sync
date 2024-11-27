/* eslint-disable react/prop-types */
const SitemapMenu = ({ siteMap }) => {
  return (
    <>
      {siteMap.map((item, itemIndex) => (
        <div
          className="flex flex-col space-y-4 text-center md:text-left"
          key={`item-${itemIndex}`}
        >
          {item.map((link, linkIndex) => (
            <div key={`link-${itemIndex}-${linkIndex}`}>
              <a
                href="#"
                className="hover:text-strongCyan"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default SitemapMenu;
