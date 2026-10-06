const networkBrands = [
  { name: "Alliance Industrial Solutions", image: "alliance-industrial-solutions", width: 1954, height: 453 },
  { name: "Bonney", image: "bonney", width: 1838, height: 508 },
  { name: "Selectemp Employment Services", image: "selectemp", width: 480, height: 195 },
  { name: "Helpmates", image: "helpmates", width: 2048, height: 422 },
  { name: "Stivers", image: "stivers", width: 1169, height: 295 },
  { name: "Capstone Search Advisors", image: "capstone-search-advisors", width: 2048, height: 494 },
  { name: "Artemis", image: "artemis", width: 2048, height: 498 },
  { name: "ASG Pharmacy", image: "asg-pharmacy", width: 2036, height: 300 },
  { name: "Smartset", image: "smartset", width: 600, height: 115 },
] as const;

function BrandList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="network-banner-list" aria-hidden={duplicate || undefined}>
      {networkBrands.map(({ name, image, width, height }) => (
        <li className="network-banner-item" key={name}>
          <img
            src={`/images/talentlaunch-network/${image}.png`}
            alt={duplicate ? "" : name}
            width={width}
            height={height}
            loading="eager"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

export default function TalentLaunchNetworkBanner() {
  return (
    <section className="network-banner" aria-label="TalentLaunch network brands">
      <div className="network-banner-viewport">
        <div className="network-banner-track">
          <BrandList />
          <BrandList duplicate />
        </div>
      </div>
    </section>
  );
}
