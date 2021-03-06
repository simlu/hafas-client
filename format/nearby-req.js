'use strict'

const nearbyReq = (ctx, location) => {
	const {profile, opt} = ctx

	return {
		cfg: {polyEnc: 'GPA'},
		meth: 'LocGeoPos',
		req: {
			ring: {
				cCrd: {
					x: profile.formatCoord(location.longitude),
					y: profile.formatCoord(location.latitude)
				},
				maxDist: opt.distance || -1,
				minDist: 0
			},
			getPOIs: !!opt.poi,
			getStops: !!opt.stops,
			maxLoc: opt.results
		}
	}
}

module.exports = nearbyReq
