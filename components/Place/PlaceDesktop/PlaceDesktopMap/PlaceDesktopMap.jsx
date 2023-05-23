const PlaceDesktopMap = () => {
  return (
    <section className="relative w-full h-[431px] mb-24">
      <h4 className="text-3xl mb-4">Расположение:</h4>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0b0022645a6c40fee5c51227945eb7b699e63822f7a54c42730b1f07e2b47a3&amp;source=constructor"
        width="100%"
        height="100%"
        frameborder="0"
        className="w-full h-full relative top-0 left-0"
      ></iframe>
    </section>
  );
};

export default PlaceDesktopMap;
