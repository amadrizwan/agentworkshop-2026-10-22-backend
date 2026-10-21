// Delivery test by the workshop lead. Removed before the workshop.
module.exports = {
  handle(req, res, ctx) {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, team: ctx.team, note: 'delivery test' }));
    return true;
  },
};
