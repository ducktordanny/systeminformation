'use strict';

import { nextTick } from '../common';
import { initMemData } from '../common/initials';
import { powerShell } from '../common/exec';

export const windowsMem = async () => {
  const result = initMemData;
  try {
    let swaptotal = 0;
    let swapused = 0;
    const stdout = await powerShell('Get-CimInstance Win32_PageFileUsage | Select AllocatedBaseSize, CurrentUsage');
    const lines = stdout.split('\r\n').filter(line => line.trim() !== '').filter((line, idx) => idx > 0);
    lines.forEach(function (line) {
      if (line !== '') {
        const lineParts = line.trim().split(/\s\s+/);
        swaptotal = swaptotal + (parseInt(lineParts[0], 10) || 0);
        swapused = swapused + (parseInt(lineParts[1], 10) || 0);
      }
    });
    result.swaptotal = swaptotal * 1024 * 1024;
    result.swapused = swapused * 1024 * 1024;
    result.swapfree = result.swaptotal - result.swapused;
  } catch (e) {
  }
  return result;
};

export const mem = async () => {
  await nextTick();
  return windowsMem();
};
