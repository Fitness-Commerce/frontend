const size = {
    mobile: 600,
    tablet: 900,
    laptop: 1200,
};

const media = {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
}

const theme = {
    mainColor: "#0a4297",
    media,
    size,
};

export default theme;
