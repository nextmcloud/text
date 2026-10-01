/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { loadState } from '@nextcloud/initial-state'

// eslint-disable-next-line import/no-unresolved, n/no-missing-import
import 'vite/modulepreload-polyfill'

const workspaceAvailable = loadState('text', 'workspace_available')
const workspaceEnabled = loadState('text', 'workspace_enabled')
const openReadOnlyEnabled = loadState('text', 'open_read_only_enabled')

const registerFilesSettings = async () => {
	if (!workspaceAvailable || !window.OCA?.Files?.Settings) {
		return
	}

	const { default: Vue } = await import('vue')
	const { default: FilesSettings } = await import('./views/FilesSettings.vue')

	const vm = new Vue({
		render: (h) => h(FilesSettings, {}),
	})

	const el = vm.$mount().$el

	window.OCA.Files.Settings.register(
		new window.OCA.Files.Settings.Setting('text', {
			el: () => el,
		}),
	)
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', registerFilesSettings, {
		once: true,
	})
} else {
	registerFilesSettings()
}

window.OCA = window.OCA || {}

window.OCA.Text = {
	...(window.OCA.Text || {}),
	RichWorkspaceEnabled: workspaceEnabled,
	OpenReadOnlyEnabled: openReadOnlyEnabled,
}
