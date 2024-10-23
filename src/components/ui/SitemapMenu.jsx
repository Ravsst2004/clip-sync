const SitemapMenu = ({ siteMap }) => {
  return (
    <>
      {siteMap.map((item, index) => (
        <div
          className="flex flex-col space-y-4 text-center md:text-left"
          key={index}
        >
          {item.map((link, index) => (
            <div key={index}>
              <a href="#" className="hover:text-strongCyan">
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
