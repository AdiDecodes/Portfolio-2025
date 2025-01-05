const data = await fetch(
	'https://www.instagram.com/graphql/query',
	{
		headers: {
			accept: '*/*',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'no-cache',
			'content-type':
				'application/x-www-form-urlencoded',
			pragma: 'no-cache',
			priority: 'u=1, i',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'sec-gpc': '1',
			'x-asbd-id': '129477',
			'x-bloks-version-id':
				'abaff5d09a530689e609e838538ae53475ff0cac083a548efad6633e0e625cff',
			'x-csrftoken':
				'34iyNK384VKkIIWV3iZIzqSyYBmHHIQx',
			'x-fb-friendly-name':
				'PolarisStoriesV3ReelPageStandaloneQuery',
			'x-fb-lsd': 'Jlavr5ONPtotOCewfCm4S3',
			'x-ig-app-id': '1217981644879628',
			cookie:
				'datr=pTWVZhOyMU_kvQUlYo_0inxn; ps_n=1; ps_l=1; ds_user_id=6910374939; csrftoken=34iyNK384VKkIIWV3iZIzqSyYBmHHIQx; mid=ZqD1uAALAAHUwWA2GQ28j_1jOCL7; ig_did=C12AD5E6-62FF-468D-AB7C-66FE918F63C1; ig_did=5443AF77-1A68-4603-BF65-43BB5F664A80; wd=430x932; sessionid=6910374939%3ACR8Pybo7C6bMiF%3A12%3AAYeul3FDTmC2etjxBpRZwAJ9mHDZGYX56_7DbBWL6QBr; dpr=3; rur="ODN\\0546910374939\\0541767420965:01f7a7b96cd6767e68d9176767072bd5dd90b4c2af273e808edf4238a4c439da54c1f61e"',
			Referer:
				'https://www.instagram.com/capture_withmanish/',
			'Referrer-Policy':
				'strict-origin-when-cross-origin',
		},
		body:
			'av=17841406928193796&__d=www&__user=0&__a=1&__req=z&__hs=20091.HYP%3Ainstagram_web_pkg.2.1.0.0.1&dpr=3&__ccg=GOOD&__rev=1019124504&__s=toi6k8%3A34kv7y%3Ayf0d3t&__hsi=7455569139085890114&__dyn=7xeUjG1mxu1syUbFp41twpUnwgU7SbzEdF8aUco2qwJxS0k24o1DU2_CwjE1EE2Cw8G11wBz81s8hwGxu786a3a1YwBgao6C0Mo2swtUd8-U2zxe2GewGw9a361qw8Xxm16wUwtE1uUdEGdwtUeo9UaQ0Lo6-3u2WE5B08-269wr86C1mwPwUQp1yUb8jxKi2K7E5yqcxK2K2G0Eqy9rx6&__csr=hQ5k5cp4lO8oGbiVjPX9FOZA9TQy8DRVrV4mBSiqLWHjhbp5mpv9l_BKrAKH_IKFVpF9qz9ui8z4iV9qibCCQqGyolDUGt2-aKEycKFXUijxB2FrqCzWh-Hp99pi2azoKKiEKm8V99rDyHzVKQm6E-Q4o01h1o6y0ua6WG0ZK0NA2e1mg8Au0qq4EkP07-wCw3uU0CB0bq8a04be1igmggzfhNpAdhoryo7G0JqbwaIg6oqIs2h0Kt0w2wG0Mi3k4-442ycga8jxubw40xqdx21nhUbp2m0IE5i0IO0isGx5hxgG6U4O06WVE05Xy0dkw37o0NS&__comet_req=7&fb_dtsg=NAcMNxzecECXVr3vfunvm_isNiRZ_Ceorormkvg4dbXY78jT-y8_-ew%3A17843669410156967%3A1721229175&jazoest=26650&lsd=Jlavr5ONPtotOCewfCm4S3&__spin_r=1019124504&__spin_b=trunk&__spin_t=1735884961&qpl_active_flow_ids=1056839232&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisStoriesV3ReelPageStandaloneQuery&variables=%7B%22reel_ids_arr%22%3A%5B%2221294660284%22%5D%7D&server_timestamps=true&doc_id=27760393576942150',
		method: 'POST',
	}
);

const json = await data.json();
console.log(json);
