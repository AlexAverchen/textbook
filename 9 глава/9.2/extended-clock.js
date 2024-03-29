class ExtendedClock extends Clock {
    construction(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};