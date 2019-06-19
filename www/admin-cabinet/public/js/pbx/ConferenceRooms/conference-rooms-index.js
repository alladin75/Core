"use strict";

/*
 * Copyright (C) MIKO LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nikolay Beketov, 11 2018
 *
 */

/* global globalRootUrl */
var conferenceTable = {
	initialize: function () {
		function initialize() {
			$('.record-row td').on('dblclick', function (e) {
				var id = $(e.target).closest('tr').attr('id');
				window.location = "".concat(globalRootUrl, "conference-rooms/modify/").concat(id);
			});
		}

		return initialize;
	}()
};
$(document).ready(function () {
	conferenceTable.initialize();
});
//# sourceMappingURL=conference-rooms-index.js.map