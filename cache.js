class Cache {

    constructor(memjs, sequelize) {

        this.memjs = memjs;
        this.sequelize = sequelize;
    }

    applyToModel(sequelizeModel) {

        sequelizeModel.cache = (ttl) => {

            if (typeof ttl != 'number') {

                ttl = this.defaultTtl;
            }

            this.caching = true;

            return this;
        };

        sequelizeModel.hook('beforeFind', (query) => {

            console.log(query);
        });
    }
}

Cache.defaultTtl = 500;

export.defaults = Cache;
