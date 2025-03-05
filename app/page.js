export default function ComingSoon() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Desktop Image - Shown only on medium (md) and larger screens */}
      <div className="hidden md:block w-full h-full">
        <img
          src="/LPDesktop.jpg"
          alt="Coming Soon Desktop"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Mobile Image - Shown only on small (sm) and smaller screens */}
      <div className="block md:hidden w-full h-full">
        <img
          src="/LPMobile.jpg"
          alt="Coming Soon Mobile"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
