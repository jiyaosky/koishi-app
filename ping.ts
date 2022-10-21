import { Context } from 'koishi'

export const name = 'ping'

export function apply(ctx: Context) {
  // 如果收到“天王盖地虎”，就回应“宝塔镇河妖”
  ctx.middleware(async (session, next) => {
    if (session.content === '天王盖地虎') {
      return '宝塔镇河妖'
    } else {
      return next()
    }
  })
  ctx.middleware(async (session, next) => {
    if (session.content === '别叫') {
      return '就叫就叫'
    } else {
      return next()
    }
  })
  ctx.middleware(async (session, next) => {
    if (session.content === 'sb') {
      return 'nmsl'
    } else {
      return next()
    }
  })
}