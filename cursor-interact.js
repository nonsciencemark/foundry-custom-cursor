/**
 * A single Cursor in our list of Cursors.
 * @typedef {Object} Cursor
 * @property {string} id - A unique ID to identify this cursor.
 * @property {string} title - Name of cursor in menu.
 * @property {string} url - The location of the cursor.
 */

// list of all cursors
class CursorList {
    static ID = 'cursor-list';
    
    static FLAGS = {
      CURSORS: 'cursors'
    }
}

class CursorData {
    // all cursors for all users
    // static get allCursors() {}
  
    // get the cursor for a given user
    static getCursorForUser(userId) {
        return game.users.get(userId)?.getFlag(CursorList.ID, CursorList.FLAGS.CURSORS);
    } 

    static createCursor(userId, cursorId) {
        // set id for this new Cursor and populate the userId
        const newCursor = {
            id: cursorId,
            userId
        }

        // construct the update to insert the new Cursor
        const newCursors = {
            [newCursor.id]: newCursor
        }

        // update the database with the new Cursors
        return game.users.get(userId)?.setFlag(CursorList.ID, CursorList.FLAGS.TODOS,
            newCursors);
    }
    
    static get allCursors() {
        // 
        const allCursors = game.users.reduce((accumulator, user) => {
            
            const userCursors = this.getCursorForUser(user.id);
    
            return {
            ...accumulator,
            ...userCursors
            }
        }, {});
    
        return allCursors;
      }

      
      static updateCursor(cursorId, updateData) {
        const relevantCursor = this.allCursors[cursorId];
    
        // construct the update to send
        const update = {
          [cursorId]: updateData
        }
    
        // update the database with the updated Cursor list
        return game.users.get(relevantCursor.userId)?.setFlag(CursorList.ID, CursorList.FLAGS.TODOS, update);
      }
    
  
}

// CursorData.updateCursor("56r58vm2v197prr8", { label: 'bar' });


var scriptName = 'Fill menu'
console.log('custom-cursor | ' + scriptName + ' loaded');