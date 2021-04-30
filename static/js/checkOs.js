function getOsInfo () {
  const userAgent = navigator.userAgent.toLowerCase()
  let name = 'Unknown'
  let version = 'Unknown'
  if (userAgent.includes('win')) {
    name = 'Windows'
    if (userAgent.includes('windows nt 5.0')) {
      version = 'Windows 2000'
    } else if (userAgent.includes('windows nt 5.1') || userAgent.includes('windows nt 5.2')) {
      version = 'Windows XP'
    } else if (userAgent.includes('windows nt 6.0')) {
      version = 'Windows Vista'
    } else if (userAgent.includes('windows nt 6.1') || userAgent.includes('windows 7')) {
      version = 'Windows 7'
    } else if (userAgent.includes('windows nt 6.2') || userAgent.includes('windows 8')) {
      version = 'Windows 8'
    } else if (userAgent.includes('windows nt 6.3')) {
      version = 'Windows 8.1'
    } else if (userAgent.includes('windows nt 6.2') || userAgent.includes('windows nt 10.0')) {
      version = 'Windows 10'
    } else {
      version = 'Unknown'
    }
  } else if (userAgent.includes('iphone')) {
    name = 'Iphone'
  } else if (userAgent.includes('mac')) {
    name = 'Mac'
  } else if (userAgent.includes('x11') || userAgent.includes('unix') || userAgent.includes('sunname') || userAgent.includes('bsd')) {
    name = 'Unix'
  } else if (userAgent.includes('linux')) {
    if (userAgent.includes('android')) {
      name = 'Android'
    } else {
      name = 'Linux'
    }
  } else {
    name = 'Unknown'
  }
  return { name, version }
}

window.getOsInfo = getOsInfo
