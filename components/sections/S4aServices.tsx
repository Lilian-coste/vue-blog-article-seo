const SERVICES = [
  { label: 'Installation', img: 'installation.png', from: 'left', delay: undefined },
  { label: 'Entretien', img: 'entretien.png', from: 'bottom', delay: 100 },
  { label: 'Dépannage', img: 'depannage.png', from: 'right', delay: undefined },
] as const;

export default function S4aServices() {
  return (
    <section
      className="gm-s4a"
      data-gm-section="s4a-bandeau-services"
      data-gm-reveal
      data-gm-tone="dark"
    >
      <div className="gm-s4a__container">
        <div className="gm-s4a__row">
          {SERVICES.map((service) => (
            <div
              key={service.label}
              className="gm-s4a__service"
              data-from={service.from}
              data-reveal
              data-reveal-delay={service.delay}
            >
              <span className="gm-s4a__label">{service.label}</span>
              <span className="gm-s4a__icon" aria-hidden="true">
                <img
                  src={`/images/services/${service.img}`}
                  alt=""
                  loading="lazy"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
