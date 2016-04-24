# bcc-sails

## Heroku commands

### Login

```shell
heroku login
```

### Create app

```shell
heroku create
```

### Start app locally

```shell
heroku local web
```

### Update app

```shell
git push heroku master
```

### Open (remote) app in browser

```shell
heroku open [route]
```

### Scale up and down

```shell
heroku ps:scale web=0
```

### View logs

```shell
heroku logs --tail
```

### Run server commands

```shell
heroku run bash
heroku run node
```

### Environment variables

In `.env` file :
```shell
TIMES=2
```

In `app.js` file :
```JavaScript
process.env.TIMES
```

Set variables on remote :
```shell
heroku config:set TIMES=2
```

See variables :
```shell
heroku config
```
