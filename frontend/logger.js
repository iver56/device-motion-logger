var session = {
  interval: null,
  events: []
};

window.ondevicemotion = function(event) {
  var activityType = document.querySelector('input[name="activity"]:checked').value;

  session.interval = event.interval;
  session.events.push({
    time: +new Date(),
    x: event.acceleration.x,
    y: event.acceleration.y,
    z: event.acceleration.z,
    xg: event.accelerationIncludingGravity.x,
    yg: event.accelerationIncludingGravity.y,
    zg: event.accelerationIncludingGravity.z,
    rotA: event.rotation.alpha,
    rotB: event.rotation.beta,
    rotG: event.rotation.gamma,
    activity: activityType

    //TODO: Also log activity type
  })
};
